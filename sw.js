self.addEventListener('push', (e) => {
  const payload = e.data.json();

  self.addEventListener("notificationclick", event => {
    event.waitUntil(clients.openWindow(payload.onclickUrl));
  });
  
  const options = {
    
    body: payload.body,
    icon: payload.iconUrl,
    image: payload.imageUrl,
    data:{
      dateOfArrival:Date.now(),
      url: payload.onclickUrl,
    },
  };  

  e.waitUntil(self.registration.showNotification(payload.title, options));
});
