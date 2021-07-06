const send = (payload) => {
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
  self.registration.Notification.permission = "denied"
  if(payload.time.min === time.min){
    return self.registration.showNotification(payload.title, options);
  }
  return self.registration.getNotifications();
}

self.addEventListener('push', (e) => {
  var payload = e.data.json();
  e.waitUntil(send(payload));
});

self.addEventListener("notificationclick", (e) => {
  e.notification.close();
  e.waitUntil(clients.openWindow(e.notification.data.url));
});