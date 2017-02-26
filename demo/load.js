const iCloud = require('icloud-session').default;
const getAllContacts = require('../lib').getAllContacts;

iCloud.loadSessionFile('session.json', (err, session) => {
  if (err) {
    throw new Error('Try refreshing your credentials (session has expired)');
  }
  getAllContacts(session, (err1, body) => {
    console.log(err1, body);
  });
});
