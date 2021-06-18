self.addEventListener('push', (e) => {
  
  var options = {
    body: 'Az oldalunkon var a kerdoived',
    icon: '/assets/icon/icon.png',
    vibrate: [100,50,100],
    data:{
      dateOfArrival:Date.now(),
      primaryKey: '2',
    },
    actions:[
      {
        action: 'open',
        title:'Ugras az oldalra',
        icon: ''
      },
      {
        action: 'close',
        title:'Lusta vagyok kitolteni',
        icon: ''
      }
    ]
  };  

  e.waitUntil(self.registration.showNotification('Van kitotletelen kerdoived!', options));
});
