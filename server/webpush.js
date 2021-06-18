const webpush = require('web-push');
const fs = require('fs');

const data = fs.readFileSync('subscribers.json');
const subscribers = JSON.parse(data);

// const keys = webpush.generateVAPIDKeys();
// console.log(keys);

const setVapidKeys = ( keys ) => {
  webpush.setVapidDetails(
    'mailto:tomi.horvath1997@gmail.com',
    keys.publicKey,
    keys.privateKey
  );
}

const send = ( company ) => {
  setVapidKeys( subscribers[company].vapidKeys );
  webpush.sendNotification( subscribers[company].subscriber, 'Payload' ).catch( err => console.error(err) );
}

//send("twitter");
send("facebook");

