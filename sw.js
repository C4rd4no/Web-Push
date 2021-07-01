self.addEventListener('push', (e) => {
  console.log(e.data.json());
  var options = {
    
    body: JSON.parse(e.payload).body,
    icon: JSON.parse(e.payload).iconUrl,
    image: JSON.parse(e.payload).imageUrl,
    data:{
      dateOfArrival:Date.now(),
      url: JSON.parse(e.payload).onclickUrl,
    },
  };  

  e.waitUntil(self.registration.showNotification(JSON.parse(e.payload).title, options));
});
