// const send = (payload) => {
//   var date = new Date();
//   var time = {
//     hour: date.getHours(),
//     min: date.getMinutes()
//   };
//   var options = {
//     body: payload.body,
//     icon: payload.iconUrl,
//     image: payload.imageUrl,
//     data:{
//       url: payload.onclickUrl,
//     },
//   };
//   if(payload.time.min === time.min){
//     console.log("ok");
//     self.registration.showNotification(payload.title, options);
//   }else{
//     setTimeout(() => self.registration.getNotifications().then(function(notifications) {
//       notifications.forEach(notification => notification.close());
//     }), 500)
    
//   }
// }

self.addEventListener('push', (e) => {
  var payload = e.data.json();
  
    var options = {
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