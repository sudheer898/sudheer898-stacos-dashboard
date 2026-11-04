// S'Tacos offline support: the page and its libraries are kept so the kiosk and dashboard open without internet.
const C = "stacos-v2";
self.addEventListener("install", e => { e.waitUntil(caches.open(C).then(c => c.addAll(["/", "/manifest.webmanifest", "/icon-192.png"]))); self.skipWaiting(); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== C).map(k => caches.delete(k))))); self.clients.claim(); });
self.addEventListener("fetch", e => {
  const r = e.request, u = new URL(r.url);
  if (r.method !== "GET" || u.hostname === "api.open-meteo.com") return;
  if (r.mode === "navigate") { e.respondWith(fetch(r).then(res => { const cp = res.clone(); caches.open(C).then(c => c.put("/", cp)); return res; }).catch(() => caches.match("/"))); return; }
  if (u.origin === location.origin || u.hostname === "cdnjs.cloudflare.com")
    e.respondWith(caches.match(r).then(hit => hit || fetch(r).then(res => { if (res.ok) { const cp = res.clone(); caches.open(C).then(c => c.put(r, cp)); } return res; })));
});
