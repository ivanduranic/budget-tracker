var CACHE_NAME = "my-site-cache-v1";
const DATA_CACHE_NAME = "data-cache-v1";

var urlsToCache = [
  "/",
  "/db.js",
  "/index.js",
  "/api/transaction",
  "/styles.css",
  "/icons/icon-192x192.png",
  "/icons/icon-512x512.png",
];

self.addEventListener("install", function (event) {
    // Perform install steps
    event.waitUntil(
      caches.open(CACHE_NAME).then(function (cache) {
        console.log("Opened cache");
        return cache.addAll(urlsToCache);
      })
    );
  });