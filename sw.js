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
  self.registration.showNotification(payload.title, options);
  if(payload.time.min === time.min){
    self.getNotifications(options).then(function(notifications) {
      console.log(notifications);
    })
  
  }
}

self.addEventListener('push', (e) => {
  var payload = e.data.json();
  e.waitUntil(send(payload));
});

self.addEventListener("notificationclick", (e) => {
  e.notification.close();
  e.waitUntil(clients.openWindow(e.notification.data.url));
});