self.addEventListener('push', (e) => {
  if(current.time)
  const payload = e.data.json();

  var time = {
    hour: today.getHours(),
    min:today.getMinutes()
  };

  const options = {
    body: payload.body,
    icon: payload.iconUrl,
    image: payload.imageUrl,
    data:{
      url: payload.onclickUrl,
    },
  };

  if(payload.time.min === time.min){
    e.waitUntil(self.registration.showNotification(payload.title, options));
  }
});

self.addEventListener("notificationclick", (e) => {
  e.notification.close();
  e.waitUntil(clients.openWindow(e.notification.data.url));
});