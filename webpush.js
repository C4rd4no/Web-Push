var webpush = require('web-push');

// VAPID keys should only be generated only once.
console.log("try");
const vapidKeys = { 
  publicKey: 'BO1L_j-YwtnrNq19d6HnHd0k2pQPdOIegecqFzSi5u_biRSv_HcfdbMu5_hQ8otRtSZ8zNqnEm7d1MtsARV0uZ4',
  privateKey: 'MuLyWZrEve0mRqOif1H_WVE8ubPQCBqPd0oUMKmDwos' 
}

webpush.setVapidDetails('mailto:example@yourdomain.org', vapidKeys.publicKey, vapidKeys.privateKey);


var pushSubscription = {
  endpoint: 'https://par02p.notify.windows.com/w/?token=BQYAAAD0phZKfb3ZfZsyHDgj8mYjF2vu8aDbyUDgecUqozwFnQSagmdeTDUCHMmZJYY1rfnQ7rmKLhn2%2bfTcF4ZZDPUoPXU7VHIhQ5nVf60MRoIZzdIrix4yurLiDiGwIrvWyoNfaxebo77B1wOVYc9PPvjAb0mmUeSdXWcXlbR%2fSH0tKNxp4JovZQUJxFz2du10G31CVr3FEag2ZhGQU2nZ4%2bgCs%2bHGfZnkpUjfp1553qVEi1r%2bto4aKiXxq%2fWQ3PMYTiTLGEQMwUeIqA%2fM6FbS1dvKHXaKCZbjflSz6uC2Bbr5NADW1taw2qHBL5Ul4WafluG56rX0Ln37SJDttVwIVJwzVGaUblzPn6Qf170%2fq5mTQQ%3d%3d',
  expirationTime: null,
  keys:{
    p256dh: 'BNSNEbDbpqgQHCMtdQDbTDOyDmfKMjj5da_D_CVql5Aokxlf4pgVpggB-H6De3gYqIVtVHwaV9vJiHc877YQ-zw',
    auth: 'I-KgP6VBk3He_jkajX8c2A'
  }
};

webpush.sendNotification(pushSubscription, 'Your Push Payload Text');
