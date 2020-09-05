const staticDevCake = "cake-site-v1";
const assets = [
  "/",
  "/index.html",
  "/css/style.css",
  "/src/app.js",
  "/images/cake_1.jpg",
  "/images/cake_2.jpg",
  "/images/cake_3.jpg",
  "/images/cake_4.jpg",
  "/images/cake_5.jpg",
  "/images/cake_6.jpg"
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCake).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});
