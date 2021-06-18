const webpush = require('web-push');
const fs = require('fs');

const data = fs.readFileSync('subscribers.json');
const subscribers = JSON.parse(data);

console.log(subscribers.twitter)



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


send("twitter");
// send("facebook");




// const vapidKeys = {
//   publicKey: 'BBZY7Q3KEtZArAAWMLi_qzWHbH4vAoqPpIXnRhmlUaw0PVs1Kt_2fgLhuaVI5i8MWASBKx3d6W6UoH2U3qChw9U',
//   privateKey: 'CZtf_JUxmXkCKbzwaKedPPO9BFC99U2rk-GUYDbYAa8'
// };

// webpush.setVapidDetails(
//   'mailto:tomi.horvath1997@gmail.com',
//   vapidKeys.publicKey,
//   vapidKeys.privateKey
// );


// const pushSubscription = {
//   endpoint:"",
//   expirationTime:null,
//   keys:{
//     p256dh:"",
//     auth:""
//   }
// };

// webpush.sendNotification(pushSubscription, 'Your Push Payload Text').catch(err => console.error(err));
