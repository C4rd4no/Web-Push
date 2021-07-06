const send = (payload) => {
  var date = new Date();
  var time = {
    hour: date.getHours(),
    min: date.getMinutes()
  };
  console.log(time);
  console.log(payload.time);
  var options = {
    body: payload.body,
    icon: payload.iconUrl,
    image: payload.imageUrl,
    data:{
      url: payload.onclickUrl,
    },
  };
  if(payload.time.min !== time.min){
    console.log("ok");
    self.registration.showNotification(payload.title, options);
  }else{
    serviceWorkerRegistration.getNotifications(options)
    .then(function(notifications) {
      notifications.forEach(notification => notification.close());
    });
    
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