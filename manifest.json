===================== index.html =====================

<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <title>Masculine Security – Mini Office</title>

  <link rel="manifest" href="manifest.json" />
  <meta name="theme-color" content="#0f1115" />

  <link rel="stylesheet" href="style.css" />
</head>

<body>
  <h1>Masculine Security – Mini Office</h1>
  <p>PWA Test – Installation should appear.</p>

<script>
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("./service-worker.js");
}
</script>

</body>
</html>



===================== manifest.json =====================

{
  "name": "Masculine Security – Mini Office",
  "short_name": "MS Office",
  "description": "Mini Office App – Rechnungen, Kunden, Einkommensteuer",
  "start_url": "./",
  "scope": "./",
  "display": "standalone",
  "background_color": "#0f1115",
  "theme_color": "#0f1115",
  "icons": [
    {
      "src": "icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "icon-512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}



===================== service-worker.js =====================

const CACHE_NAME = "ms-mini-office-v3";

const FILES_TO_CACHE = [
  "./",
  "./index.html",
  "./style.css",
  "./manifest.json",
  "./icon-192.png",
  "./icon-512.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE))
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
      )
    )
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(res => res || fetch(event.request))
  );
});
