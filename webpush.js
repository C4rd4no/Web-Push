const webpush = require('web-push');

// VAPID keys should only be generated only once.
keys = webpush.generateVAPIDKeys();
console.log(keys);
const vapidKeys = {
  publicKey:
    'BIoS-dNNhrUd3gCs7lEmy7uAK3oep1IeRK1x4o9T_FglWVABlQd90HY6jfcLSbI8jmgnHDhmywifXkHhHM_F7hs',
  privateKey: 'u9QvaB3zY4W5W-ECQtHJhOi-qneC2Kn3zrszSDLbB0Q'
};

webpush.setVapidDetails(
  'mailto:example@yourdomain.org',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

// This is the same output of calling JSON.stringify on a PushSubscription
const pushSubscription = {
  endpoint: '.....',
  keys: {
    auth: '.....',
    p256dh: '.....'
  }
};

webpush.sendNotification(pushSubscription, 'Your Push Payload Text');
