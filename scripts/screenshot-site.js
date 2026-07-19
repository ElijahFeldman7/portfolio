/**
 * Captures screenshots of every page for the README. Requires a production
 * build already running locally: `npm run build && npx serve -s build -l 4173`
 * Uses the system Chrome install (macOS path below) rather than a bundled
 * Chromium. Run with: npm run screenshot-site
 */
const puppeteer = require('puppeteer-core');
const path = require('path');

const CHROME_PATH = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const BASE_URL = 'http://localhost:4173';
const OUT_DIR = path.join(__dirname, '..', 'readme-assets');

const pages = [
  { route: '/', file: 'home.png' },
  { route: '/about', file: 'about.png' },
  { route: '/projects', file: 'projects.png' },
  { route: '/publications', file: 'publications.png' },
  { route: '/cv', file: 'cv.png' },
  { route: '/blog', file: 'blog.png' },
  { route: '/blog/linux-is-better', file: 'blog-post.png' },
  { route: '/gallery', file: 'gallery.png' },
  { route: '/contact', file: 'contact.png' },
];

async function main() {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: 'new',
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  for (const { route, file } of pages) {
    await page.goto(BASE_URL + route, { waitUntil: 'networkidle0' });
    await new Promise((r) => setTimeout(r, 300));
    await page.screenshot({ path: path.join(OUT_DIR, file), fullPage: true });
    console.log('captured', file);
  }

  // Gallery hover state, to show the caption-on-hover interaction
  await page.goto(BASE_URL + '/gallery', { waitUntil: 'networkidle0' });
  await new Promise((r) => setTimeout(r, 300));
  const firstTile = await page.$('.group');
  if (firstTile) {
    await firstTile.hover();
    await new Promise((r) => setTimeout(r, 400));
    await page.screenshot({ path: path.join(OUT_DIR, 'gallery-hover.png') });
    console.log('captured gallery-hover.png');
  }

  // Mobile viewport: home + open nav menu
  await page.setViewport({ width: 390, height: 844 });
  await page.goto(BASE_URL + '/contact', { waitUntil: 'networkidle0' });
  await new Promise((r) => setTimeout(r, 300));
  await page.screenshot({ path: path.join(OUT_DIR, 'mobile-contact.png'), fullPage: true });
  console.log('captured mobile-contact.png');

  const menuButton = await page.$('button[aria-label="Open menu"]');
  if (menuButton) {
    await menuButton.click();
    await new Promise((r) => setTimeout(r, 300));
    await page.screenshot({ path: path.join(OUT_DIR, 'mobile-nav-open.png') });
    console.log('captured mobile-nav-open.png');
  }

  await browser.close();
}

main();
