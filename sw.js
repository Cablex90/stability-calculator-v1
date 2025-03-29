self.addEventListener("install", function (event) {
    console.log("Service Worker installiert");
    event.waitUntil(self.skipWaiting());
  });
  
  self.addEventListener("activate", function (event) {
    console.log("Service Worker aktiviert");
    event.waitUntil(self.clients.claim());
  });
  