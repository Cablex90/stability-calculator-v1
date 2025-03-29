self.addEventListener("install", event => {
  event.waitUntil(
      caches.open("app-cache").then(cache => {
          return cache.addAll([
              "/stability-calculator-v1/",
              "/stability-calculator-v1/index.html",
              "/stability-calculator-v1/style.css",
              "/stability-calculator-v1/script.js",
              "/stability-calculator-v1/icon.png"
          ]);
      })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
      caches.match(event.request).then(response => {
          return response || fetch(event.request);
      })
  );
});
