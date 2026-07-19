import { useEffect } from 'react';

const SITE_NAME = 'Elijah Feldman';
const SITE_URL = 'https://elijahwfeldman.com';

function setMetaTag(attr, key, content) {
  let el = document.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function SEO({ title, description, path = '/' }) {
  useEffect(() => {
    const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
    document.title = fullTitle;

    if (description) {
      setMetaTag('name', 'description', description);
      setMetaTag('property', 'og:description', description);
    }
    setMetaTag('property', 'og:title', fullTitle);
    setMetaTag('property', 'og:url', `${SITE_URL}${path}`);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', `${SITE_URL}${path}`);
  }, [title, description, path]);

  return null;
}

export default SEO;