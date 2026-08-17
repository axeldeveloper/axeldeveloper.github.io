// service-worker.js
self.addEventListener("install", function (e) {
    console.log("Service Worker instalado");
    e.waitUntil(
        caches.open("meu-cache-mss").then(function (cache) {
            return cache.addAll([
                "./",
                "./index.html",
                "./manifest.json",
                "./assets/img/icon-192.png",
                "./assets/img/icon-512.png"
            ]);
        })
    );
});

self.addEventListener("fetch", function (e) {
    e.respondWith(
        caches.match(e.request).then(function (response) {
            return response || fetch(e.request);
        })
    );
});
