self.addEventListener('push', (e) => {
  
  var options = {
    body: 'Az oldalunkon var a kerdoived',
    icon: '',
    data:{
      dateOfArrival:Date.now(),
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
