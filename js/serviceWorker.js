if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register('/sw.js')
  .then(function() {
    console.log("service worker registered");
  })
  .catch(function() {
    console.log("service worker registration failed");
  })
}
