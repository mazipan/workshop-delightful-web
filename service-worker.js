const CACHE_NAME = 'static-cache-v1';

const FILES_TO_CACHE = [
  '/offline.html',
  '/index.html',
  '/manifest.json',
  '/index.js',
  '/assets/favicon.ico',
  '/assets/logo.png',
  '/assets/icons/favicon-192x192.png',
  '/assets/icons/favicon-32x32.png',
  '/assets/icons/favicon-96x96.png',
  'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css',
  'https://ghibliapi.herokuapp.com/films',
  // 'https://img.shields.io/github/stars/mazipan/workshop-delightful-web.svg?style=social'
];

self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(FILES_TO_CACHE);
    })
  );
});

self.addEventListener('activate',  event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request, {ignoreSearch:true}).then(response => {
      return response || fetch(event.request);
    })
  );
});