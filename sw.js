self.addEventListener('push', (e) => {

  var options = {
    body: 'Let see',
    icon: '',
    vibrate: [100,50,100],
    data:{
      dateOfArrival:Date.now(),
      primaryKey: '2',
    },
    actions:[
      {
        action: 'explore',
        title:'Explore this new world',
        icon: ''
      },
      {
        action: 'close',
        title:'Close',
        icon: ''
      }
    ]
  }  

  e.waitUntil(self.registration.showNotification('Random Cat for you!', options));
});
