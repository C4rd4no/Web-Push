const send = (payload) => {
  var date = new Date();
  var time = {
    hour: date.getHours(),
    min: date.getMinutes()
  };

  const options = {
    body: payload.body,
    icon: payload.iconUrl,
    image: payload.imageUrl,
    data:{
      url: payload.onclickUrl,
    },
  };
  console.log(payload.time.min);
  console.log(time.min);
  if(payload.time.minutes === time.min){
    self.registration.showNotification(payload.title, options);
  }
}

self.addEventListener('push', (e) => {
  var payload = e.data.json();
  return e.waitUntil(send(payload));
});

self.addEventListener("notificationclick", (e) => {
  e.notification.close();
  // e.waitUntil(clients.openWindow(e.notification.data?.url));
});