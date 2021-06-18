self.addEventListener('push', function(e) {
  
  var options = {
    body: 'Az oldalunkon var a kerdoived',
    icon: '',
    vibrate: [100,50,100],
    data:{
      dateOfArrival:Date.now(),
      primaryKey: '2',
    },
    actions:[
      {
        action: 'Ugras az oldalra',
        title:'Ugras az oldalra title',
        icon: ''
      },
      {
        action: 'close',
        title:'Lusta vagyok',
        icon: ''
      }
    ]
  };  

  e.waitUntil(self.registration.showNotification('Van kitotletelen kerdoived!', options));
});
