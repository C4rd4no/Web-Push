self.addEventListener('push', (e) => {
  e.waitUntil(self.registration.showNotification('Random Cat for you!', {}));
});