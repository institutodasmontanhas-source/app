const CACHE_NAME = 'icm-v1';
const ASSETS = [
  'index_updated.html',
  'manifest.json',
  'logo.png',
  'icon-192.png',
  'icon-512.png',
  'icon-180.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
