#!/usr/bin/env node
/**
 * Compresses image assets in public/. Run with: npm run compress-images
 *
 * - HIGH_QUALITY images (used for Google/social - see SEO.js, index.html Person
 *   schema, and sitemap.xml image entries) are resized less aggressively and
 *   encoded at a higher quality.
 * - ICONS (favicons, PWA icons) are never resized - they must stay at their
 *   exact declared dimensions - just losslessly-ish re-encoded.
 * - Everything else (gallery photos, project covers, misc) is resized to a
 *   sensible max dimension for how large it's ever displayed on the site and
 *   encoded at a lower quality, since these were uncompressed camera originals.
 * - Files are overwritten in place. Since everything here is tracked by git,
 *   `git checkout -- <file>` restores the original if a result looks off.
 */
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const PUBLIC_DIR = path.join(__dirname, '..', 'public');

// Tied to the Person schema/og:image/sitemap image entries added for Google
// Images - keep these noticeably sharper than everything else.
const HIGH_QUALITY = new Set([
  'images/glacier.jpg',
  'gallery/IMG_0640.jpg',
  'gallery/IMG_2302.jpg',
  'images/preview.png',
]);

// Fixed-size app/browser icons: never resize (must stay at their exact
// declared dimensions), just losslessly-ish re-encode the PNG palette.
const ICONS = new Set([
  'icons/favicon-16x16.png',
  'icons/favicon-32x32.png',
  'icons/apple-touch-icon.png',
  'icons/android-chrome-192x192.png',
  'icons/android-chrome-512x512.png',
  'icons/logo192.png',
  'icons/logo512.png',
]);

// .ico isn't a format sharp can re-encode reliably - leave it as-is.
const SKIP = new Set(['favicon.ico']);

const HIGH_MAX_DIMENSION = 1800;
const HIGH_JPEG_QUALITY = 88;
const HIGH_PNG_QUALITY = 90;

const STANDARD_MAX_DIMENSION = 1400;
const STANDARD_JPEG_QUALITY = 72;
const STANDARD_PNG_QUALITY = 65;

const ICON_PNG_QUALITY = 95;

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full, files);
    } else if (/\.(jpe?g|png)$/i.test(entry.name)) {
      files.push(full);
    }
  }
  return files;
}

async function compress(file) {
  const relPath = path.relative(PUBLIC_DIR, file).split(path.sep).join('/');
  if (SKIP.has(relPath)) return null;

  const isIcon = ICONS.has(relPath);
  const isHigh = HIGH_QUALITY.has(relPath);
  const isPng = /\.png$/i.test(file);

  const before = fs.statSync(file).size;
  const original = fs.readFileSync(file);

  let pipeline = sharp(original).rotate();

  if (!isIcon) {
    const maxDim = isHigh ? HIGH_MAX_DIMENSION : STANDARD_MAX_DIMENSION;
    pipeline = pipeline.resize({
      width: maxDim,
      height: maxDim,
      fit: 'inside',
      withoutEnlargement: true,
    });
  }

  if (isPng) {
    const quality = isIcon ? ICON_PNG_QUALITY : isHigh ? HIGH_PNG_QUALITY : STANDARD_PNG_QUALITY;
    pipeline = pipeline.png({ quality, palette: true, compressionLevel: 9 });
  } else {
    pipeline = pipeline.jpeg({
      quality: isHigh ? HIGH_JPEG_QUALITY : STANDARD_JPEG_QUALITY,
      mozjpeg: true,
    });
  }

  const output = await pipeline.toBuffer();

  if (output.length < before) {
    fs.writeFileSync(file, output);
  }

  const after = fs.statSync(file).size;
  const tier = isIcon ? 'icon' : isHigh ? 'high' : 'standard';
  return { relPath, before, after, tier };
}

async function main() {
  const files = walk(PUBLIC_DIR);
  const results = [];
  for (const file of files) {
    const result = await compress(file);
    if (result) results.push(result);
  }

  results.sort((a, b) => b.before - a.before);

  let totalBefore = 0;
  let totalAfter = 0;
  for (const r of results) {
    totalBefore += r.before;
    totalAfter += r.after;
    const pct = (100 * (1 - r.after / r.before)).toFixed(0);
    console.log(
      `[${r.tier}] ${r.relPath}: ${(r.before / 1024).toFixed(0)}KB -> ${(r.after / 1024).toFixed(0)}KB (-${pct}%)`
    );
  }

  console.log('');
  console.log(
    `Total: ${(totalBefore / 1024 / 1024).toFixed(1)}MB -> ${(totalAfter / 1024 / 1024).toFixed(1)}MB (-${(100 * (1 - totalAfter / totalBefore)).toFixed(0)}%)`
  );
}

main();
