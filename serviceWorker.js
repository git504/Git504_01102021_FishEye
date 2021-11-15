"use strict";
const cacheName = "cache-v1";
const assets = [
  "/",
  "/index.html",
  "/user.html",
  "/style/main.css",
  "/assets/favicon.ico",
  "/assets/dm-sans-cufonfonts-webfont/DMSans-Regular.woff",
  "/db.json",
];

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("./serviceWorker.js")
    .then(() => console.log("serviceWorker registred"))
    .catch((err) => console.log(err));
}

// mettre en cache
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(cacheName).then((cache) => {
      cache.addAll(assets);
    })
  );
});

// fetcher le cache
self.addEventListener("fetch", (e) => {
  //   console.log(e.request);
  e.respondWith(
    caches.match(e.request).then((cache) => {
      return cache || fetch(e.request);
    })
  );
});
