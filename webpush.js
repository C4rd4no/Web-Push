var webpush = require('web-push');

// VAPID keys should only be generated only once.
console.log("try");
const vapidKeys = { 
  publicKey: 'BO1L_j-YwtnrNq19d6HnHd0k2pQPdOIegecqFzSi5u_biRSv_HcfdbMu5_hQ8otRtSZ8zNqnEm7d1MtsARV0uZ4',
  privateKey: 'MuLyWZrEve0mRqOif1H_WVE8ubPQCBqPd0oUMKmDwos' 
}

webpush.setVapidDetails('mailto:example@yourdomain.org', vapidKeys.publicKey, vapidKeys.privateKey);


var pushSubscription = {
  endpoint:"https://par02p.notify.windows.com/w/?token=BQYAAABgD23MCUAkCYrfQgctla3O%2bd2aICJwtm2kZno%2b17C58Ij5fVyfTcCQC0%2bPv4e7uoIGxCmfFPL%2f3%2fHdfuFUAr1KH5GZ1LTLD6Nnw8Me1543h0rs9CT3qY%2fetH7ouxuTBgUI77L7OWwYW%2b%2fuK716gT45V8S%2fCnSsMmRxiRQDZnid0npVfWtMmYYaOTrY3Anhh1wOIIISPkHwbhXGcm8d36k9T%2fvGbtKirArZBMhnlYIyUDxIO96oiE16AkVT9wXVZcfr%2fxClSHly0jBskybd5w49uhrDg0vPaw04dxmhly0VNWdrK7wUHIugxeBCJ2Fdq5EHUTcFRhBsViZAZcU3%2fmIYxa8WVgSgWlX%2f4WzcDPlQww%3d%3d",
  expirationTime:null,
  keys:{
    p256dh:"BA00xvPvAmM7oR6XwCBPYTqQZxjcVx3BY_QBOTiJNxuc61XRriXQczjxC-ByZFZcEpy83S2YaenYMePFFjAHWGM",
    auth:"UF9IT99_dxwHccszYfq4qw"
  }
};

webpush.sendNotification(pushSubscription, 'Your Push Payload Text');
