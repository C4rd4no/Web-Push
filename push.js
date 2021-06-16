
const push = require('web-push');

const keys = { 
  publicKey: 'BEOpffA7jaGuNtg589eAvwJWZYyMTuY1fGnDgZo-mJpFSv1TQlxIOOdhVjyeylGKGnLajkUiGnl-J_hEig_O-mQ',
  privateKey: 'tHani0ty53xZoLA3j2B3iO-1fis_V4Z1xxBqLLHPt-o' 
}

push.setVapidDetails(
  'mailto:example@yourdomain.org',
  keys.publicKey,
  keys.privateKey
);

const client = {
  "endpoint":"https://par02p.notify.windows.com/w/?token=BQYAAADTmhN3FU6bd%2fsMpKXmG9naE%2fn9r%2bgV2nfcJNnaBbCOVulhK2LL%2bhuzmZf3zuYCbT5g9QwPZQOfmGwgizw4KAK60pTAQKnxJiumwdbQBAR1V6YTKpgOEGYWzKGmZHf4JNxaAjR2lWwoKemrv9eJIFVYGHm%2fHvOiAIaAZ93eZ%2bTM%2f50lycAOndB4FZPkdg2FMmdSZExdFSZxb3Nt%2fcBRmAmKUj6B0LoqGlJYPxQKiWIAyRLkRP%2b3LdDDUMDa%2bpEQX1UHVhbI%2b7IGTRJMxYs5oIK6Iu5FlmslxLdph8ChmvfUFS0h%2blfqrQpOOgeg2NcnXD841NrMR%2fgE4zNFopfHRHg7djZRPqTuAN6570AXCnpxwA%3d%3d",
  "expirationTime":null,
  "keys":{
    "p256dh":"BBxajg1qyDNg0eE2g7HPotkTKhQsPH-bdGODarCkCo_5mnZ_yh_WFqjML_zDUfwppYJQK9LdPEj_ryjQT15GZFc",
    "auth":"O1YFvVHk-1FP6Xdr9kjdwA"}
};

push.sendNotification(client,'Random cat');