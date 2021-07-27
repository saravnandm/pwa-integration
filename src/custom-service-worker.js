importScripts("./ngsw-worker.js");

(function () {
  "use strict";

  self.addEventListener("notificationclick", (event) => {
    const rootUrl = new URL("/", location);
    event.notification.close();
    // Enumerate windows, and call window.focus(), or open a new one.
    event.waitUntil(
      clients.matchAll().then((matchedClients) => {
        for (let client of matchedClients) {
          if (new URL(client.url).host === rootUrl.host) {
            return client.focus();
          }
        }
        return clients.openWindow("/");
      })
    );
  });
})();
