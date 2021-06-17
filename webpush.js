const webpush = require('web-push');

// VAPID keys should only be generated only once.
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
  "endpoint":"https://par02p.notify.windows.com/w/?token=BQYAAABp2qhmhKj1rZ8ht8BIliBNR34Q9kgx%2fjKtOCetTE1cd4wnSoG2fhtpvW0bkaVI3k7MiWe6em7%2bDPkA8SyoNcpRj1ofvjrzz1FJ2aLCjTvhoyP0rLpeKErbEPhzA2lrUiST2nYrNmOPQDBuZZ11FdMMjAQPwBg%2bvOccHeEZw4K2P%2bHfOwctboK0vhtJs4C369mc94%2fn6tMmzQya9xgYRnyk5whHUcasHT%2furNFkPBFze3N0XDUAdycmUzbioHBEK8xH9GZ0n6aj18K9OqL7b4YyEmCjzXAWS%2fLSZqp2xlt6P%2bQE4ucNw49X2YZn9u4y73it7Ts39CDBL3s2UZRlJ%2fykLJ2vWxXFLv16IbKvbJ0h5g%3d%3d",
  "expirationTime":null,
  "keys":{
    "p256dh":"BIVqGhMC46NbK0d7Ehm9Y1hxYIFfc2hA9M4XZ6XMhDzhMY36DoB50q_BZ112YDvHpSilcohlzaObHSsAoJHgGlU",
    "auth":"63qHV8wXoVFT2MVp5ROdXA"}
};

webpush.sendNotification(pushSubscription, 'Your Push Payload Text');
