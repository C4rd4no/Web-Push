
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
  "endpoint":"https://par02p.notify.windows.com/w/?token=BQYAAABc14xeSmPjxLUifsOubt3guSVlWlngORrAa5CMQ9IXSLX4R70jidClTcapcNCzFFf9Isd4JAdtqRkX3ZksU%2fWXIOdywO%2bfgE7imJcDqBL4RklEvx6ZLlwZIz6iygLhjWKlPNNT5BXhSUkxprGs2feyxM34bo%2fmU0jU0AT16ZvI7K3EdF4XQYcPMG3Xm%2bi1z3jNmzuT8%2fBjrdgFqUMusee1KfJutoIgJw1sFvI%2bJPeHMVE7lV8MeYV0UeufX%2bFylZ7NA0TcN22BWSJyMRdds8bquVuQClLQHQZ5pZr9bfuoAoq59s%2f75fbKRSCP7ObJGXQ%3d",
  "expirationTime":null,
  "keys":{
    "p256dh":"BJvdZKev5TAwI1Iu-2T6r4b3ifzKBl73IcH7dW7yqEV7_yX1WZ2WyuEt4v_DWraHro77W5rjKfeRnnAbQFSiCg4",
    "auth":"Q29R74YvPI72eI2xt9rziw"
  }
};

push.sendNotification(client,'Random cat');