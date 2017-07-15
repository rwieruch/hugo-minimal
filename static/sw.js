// Service Worker can only cache files from folder or subfolder

const CURRENT_CACHE = 'pwa-v4';

self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open(CURRENT_CACHE).then(function(cache) {
     return cache.addAll([
       // '/',
       '/css/bootstrap.default.css',
       '/css/customizations.css',
       '/img/page/newsletter.jpg',
       '/img/page/profile.jpg',
       '/img/page/logo.png',
     ]);
   })
 );
});

self.addEventListener('fetch', function(event) {
  // All intercepted event whereas the files are in the same folder or subfolder
  event.respondWith(
    caches.match(event.request).then(function(response) {
      // All defined responses are in cache
      return response || fetch(event.request);
    }).catch(function() {
      console.log('Service Worker for PWA Error');
    })
  );
});

// Clean up old caches
self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.filter(function(cacheName) {
          return cacheName !== CURRENT_CACHE
        }).map(function(cacheName) {
          return caches.delete(cacheName);
        })
      );
    })
  );
});
