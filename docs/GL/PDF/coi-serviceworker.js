/*! coi-serviceworker v0.1.7 - Guido Zuidhof, licensed under MIT */
let coepCredentialless = false;
if (typeof window === 'undefined') {
  self.addEventListener("install", () => self.skipWaiting());
  self.addEventListener("activate", (event) => event.waitUntil(self.clients.claim()));
  self.addEventListener("message", (ev) => {
    if (!ev.data) return;
    if (ev.data.type === "deregister") {
      self.registration.unregister().then(() => self.clients.matchAll().then(clients => clients.forEach(client => client.navigate(client.url))));
    }
  });
  self.addEventListener("fetch", function (event) {
    const { request } = event;
    if (request.cache === "only-if-cached" && request.mode !== "same-origin") return;
    event.respondWith(
      fetch(request).then((response) => {
        if (response.status === 0) return response;
        const newHeaders = new Headers(response.headers);
        newHeaders.set("Cross-Origin-Embedder-Policy", coepCredentialless ? "credentialless" : "require-corp");
        if (!coepCredentialless) newHeaders.set("Cross-Origin-Opener-Policy", "same-origin");
        return new Response(response.body, { status: response.status, statusText: response.statusText, headers: newHeaders });
      }).catch((e) => console.error(e))
    );
  });
} else {
  (() => {
    const re = /coi-serviceworker\.js/;
    const src = document.currentScript && document.currentScript.src || window.location.href;
    if (window.crossOriginIsolated !== false || !re.test(src)) return;
    const registration = navigator.serviceWorker.register(window.location.href).then(r => {
      console.log("COI Service Worker registered");
      r.addEventListener("updatefound", () => window.location.reload());
      if (r.active && !navigator.serviceWorker.controller) window.location.reload();
    });
  })();
}
