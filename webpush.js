const webpush = require('web-push');

// VAPID keys should only be generated only once.
keys = webpush.generateVAPIDKeys();
console.log(keys);
const vapidKeys = {
  publicKey:
    'BPDfBeH6xZ5BQIV0z4xrYsk8pEW5hGZlbNTpDpN0oX6gsk69S7LuT6e1qzV0tMHaDlsAzadtk19imELF8PpjrDE',
  privateKey: 'tsoc3zXHYQmX3uEj7QyCe9nOanQpIc8mXOuKaI3jxSE'
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
