const CACHE_NAME = 'city-adventurer-v1';
const urlsToCache = ['/', '/index.html', '/manifest.json'];

self.addEventListener('install', (event) => {
  (event as any).waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  (event as any).respondWith(
    caches.match((event as any).request).then((response) => response || fetch((event as any).request))
  );
});