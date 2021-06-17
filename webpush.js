const webpush = require('web-push');

// VAPID keys should only be generated only once.

const vapidKeys = {
  publicKey: 'BMBKo0RxtYzc22eA6Hl2Vo700DpgjrRd0fABdrk2_iMY2n46KHF5GVxrmAmcIVWp4_6GW_3CusPa6-5FyiJMcqo',
  privateKey: 'exw_AWAHEVuaMLjbJiTJ0PYP4rn2Sxejp17Uf0zGNyI'
};

webpush.setVapidDetails(
  'mailto:example@yourdomain.org',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

// This is the same output of calling JSON.stringify on a PushSubscription
const pushSubscription = {
  "endpoint":"https://par02p.notify.windows.com/w/?token=BQYAAABaiN1FumHwfMtISkELcmvp3qtreDOXOhZNK3G3QsMP%2f0APvD%2fqGfGdrq43ZsBXd6hw7zLX0gxvPu%2f0ytrSs3ZfNSTtMTQ0p2mJYqfaXyhaOlztTxbClqSk4oOdoaSlcT5sRIwhjT4hl%2fQBXRYv0octLd3um2Qf3hHWI2o2gH8rn2hm0TnDQfL1843aGPpysuFwu6AstBj0iiTTtEYlFDFslsrrbF0yhyXThHEdfnqrnGGmWmN1FPU1ux7A2kVc3gYseMUDypAB5Kulx14mnw6aTmHOKf%2f3uIEPThzE%2f%2fmzhKPnRSwpWozay5Awfatty3Nidu1sBCwZey3nHFRK%2f1k50RXqgV0%2f05mamyhDmaEvrA%3d%3d",
  "expirationTime":null,
  "keys":{
    "p256dh":"BPrqcVMj6NHx6rytcSpkCuRCnGE1JRzwuildIFKV5nNBoadkhlBZzAGWVEggitZ9V8-ii7rNW0k0gJzrrr95nEk",
    "auth":"r93x22oQOUX1EsgqQKc2Fw"
  }
};

webpush.sendNotification(pushSubscription, 'Your Push Payload Text');
