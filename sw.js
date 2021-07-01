self.addEventListener('push', (e) => {
  const payload = e.data.json();

  const options = {
    body: payload.body,
    icon: payload.iconUrl,
    image: payload.imageUrl,
    data:{
      url: payload.onclickUrl,
    },
  };  

  e.waitUntil(self.registration.showNotification(payload.title, options));
});

self.addEventListener("notificationclick", (e) => {
  e.notification.close();
  e.waitUntil(clients.openWindow(e.notification.data.url));
});