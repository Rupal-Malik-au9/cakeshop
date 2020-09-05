self.addEventListener('install', function (e) {
    e.waitUntil(
        caches.open('fox-store').then(function (cache) {
            return cache.addAll([
                '/cakeshop',
                '/cakeshop/index.html',
                "/cakeshop/css/style.css",
                "/cakeshop/src/app.js",
                "/cakeshop/images/cake_1.jpg",
                "/cakeshop/images/cake_2.jpg",
                "/cakeshop/images/cake_3.jpg",
                "/cakeshop/images/cake_4.jpg",
                "/cakeshop/images/cake_5.jpg",
                "/cakeshop/images/cake_6.jpg"
            ]);
        })
    );
});

self.addEventListener('fetch', function (e) {
    console.log(e.request.url);
    e.respondWith(
        caches.match(e.request).then(function (response) {
            return response || fetch(e.request);
        })
    );
});
