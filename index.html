========================
FILE: manifest.json
========================
{
  "name": "Masculine Security – Mini Office",
  "short_name": "MS Office",
  "description": "Mini Office App – Rechnungen, Kunden, Ausgaben, Lohnabrechnung, Einkommensteuer",
  "start_url": "./",
  "scope": "./",
  "display": "standalone",
  "background_color": "#0a1e2d",
  "theme_color": "#0a1e2d",
  "icons": [
    {
      "src": "./icon-192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "any maskable"
    },
    {
      "src": "./icon-512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "any maskable"
    }
  ]
}

========================
FILE: service-worker.js
========================
const CACHE_NAME = "ms-mini-office-v2";

const FILES = [
  "./",
  "./index.html",
  "./style.css",
  "./manifest.json",
  "./icon-192.png",
  "./icon-512.png"
];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(FILES)));
  self.skipWaiting();
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.map((k) => (k !== CACHE_NAME ? caches.delete(k) : null)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});

========================
FILE: index.html  (HEAD gudaha ku dar)
========================
<link rel="manifest" href="./manifest.json">
<meta name="theme-color" content="#0a1e2d">

<script>
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("./service-worker.js");
    });
  }
</script>
