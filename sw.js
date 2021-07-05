self.addEventListener('push', (e) => {

  var payload = e.data.json();
  console.log(e);
  var date = new Date();
  var time = {
    hour: date.getHours(),
    min: date.getMinutes()
  };

  console.log(time);
  console.log(payload.time);
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