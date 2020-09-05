importScripts('/cache-polyfill.js');


self.addEventListener('install', function (e) {
    e.waitUntil(
        caches.open('airhorner').then(function (cache) {
            return cache.addAll([
                '/',
                '/index.html',
                "/css/style.css",
                "/src/app.js",
                "/images/cake_1.jpg",
                "/images/cake_2.jpg",
                "/images/cake_3.jpg",
                "/images/cake_4.jpg",
                "/images/cake_5.jpg",
                "/images/cake_6.jpg"
            ]);
        })
    );
});
self.addEventListener('fetch', function (event) {
    console.log(event.request.url);

    event.respondWith(
        caches.match(event.request).then(function (response) {
            return response || fetch(event.request);
        })
    );
});