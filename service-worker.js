const cacheName = 'todo-app-v1';
const assets = [
  '/',
  '/index.html',
  '/style.css',
  '/manifest.json',
  '/service-worker.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(assets);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(res => {
      return res || fetch(event.request);
    })
  );
});