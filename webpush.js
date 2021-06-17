const webpush = require('web-push');

// VAPID keys should only be generated only once.
const vapidKeys = {
  publicKey:
    'BBZY7Q3KEtZArAAWMLi_qzWHbH4vAoqPpIXnRhmlUaw0PVs1Kt_2fgLhuaVI5i8MWASBKx3d6W6UoH2U3qChw9U',
  privateKey: 'CZtf_JUxmXkCKbzwaKedPPO9BFC99U2rk-GUYDbYAa8'
};

webpush.setVapidDetails(
  'mailto:example@yourdomain.org',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

// This is the same output of calling JSON.stringify on a PushSubscription
const pushSubscription = {
  endpoint: 'https://par02p.notify.windows.com/w/?token=BQYAAABp0PXm1SaIGSbLL3DcGq9bH8tW7UoEM7uDz4otCQ%2f7INzGYPuGrYbIx2fFVBJQNwk7b6BU%2fiMCcXnBj8aOBDx6t4fvgKUF8nrSIfbhDlGG3ovrhIYwoUxCtt1Oq9CuWG%2bwa2ksT1b8WvbYJDFIk0aHuucZj3CpN7BPTUNZYnfdX5Jml9nZaRbLDpKPFpeREKoECzAhzfaYdW5exQzvD3isyMHnZBh4yUWY9R1jMWnOHYdBVJvCmFXJrKCHu3pSSD4yzcQzp6eNnFDx4F%2boM7KnPjMc45AvjM7GDgpQRYFKsDrFcbfaTg9Vsj5lvbtZ511mdb365VNldU%2fHnbEerDeeWYPMCp4i3xC3r%2bqn%2fF35MA%3d%3d',
  expirationTime: null,
  keys: {
    auth: 'UyYmGGDJiEcCSzkLp3M72Q',
    p256dh: 'BJvarqqMsZqREqs_VPRe2IwG4LQB5pfYpHnRs8XcjNEnkA30RAIqHwbOvyn0l8ahkgCeNha5_lC830lPzQvH5oE'
  }
};

webpush.sendNotification(pushSubscription, 'Your Push Payload Text');
