/**
 * Commerce Lab - Service worker (offline reading).
 *
 * Network first for everything (so edits always show when online); every successful response is
 * cached, and the cached copy is used when the network fails.
 * Lessons are cached as they are read; opening learn/glossary.html loads (and so caches) every lesson.
 *
 * Bump VERSION when you rename or remove files so old caches are dropped.
 */
const VERSION = 'cl-v2';

const PRECACHE = [
  './', 'index.html', 'manifest.webmanifest', 'icons/icon-192.png',
  'css/commerce-core.css', 'css/commerce-labs.css', 'css/lessons.css',
  'js/core.js', 'js/nav.js', 'js/lesson-kit.js', 'js/lessons/registry.js',
  'learn/index.html', 'learn/lesson.html', 'learn/glossary.html', 'learn/revise.html', 'updates/index.html', 'js/data/compliance-updates.js',
  'accounting-lab/index.html', 'business-lab/index.html', 'tax-lab/index.html', 'excel-lab/index.html',
  'mis-lab/index.html', 'calculators/index.html', 'cheatsheets/index.html', 'projects/index.html',
  'quiz/index.html', 'teacher-hub/index.html', 'dashboard/index.html', 'islamic-standards/index.html'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(VERSION)
      // One missing file must not break the install, so add each on its own.
      .then(cache => Promise.all(PRECACHE.map(p => cache.add(p).catch(() => null))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;

  // no-cache: always revalidate with the server, so a stale browser copy never hides an update.
  event.respondWith(
    fetch(req.mode === 'navigate' ? req : new Request(req, { cache: 'no-cache' }))
      .then(res => {
        if (res.ok) { const copy = res.clone(); caches.open(VERSION).then(c => c.put(req, copy)); }
        return res;
      })
      .catch(async () => {
        const hit = await caches.match(req)
          // lesson.html?id=... falls back to the cached reader, which then loads the cached lesson module.
          || (req.mode === 'navigate' && await caches.match(req, { ignoreSearch: true }));
        return hit || Response.error();
      })
  );
});
