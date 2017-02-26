const iCloud = require('icloud-session').default;
const getAllContacts = require('../lib').getAllContacts;

function getContactsCallback(err, body) {
  console.log(err, body);
}

iCloud.loadSessionFile('session.json', (err, session) => {
  if (err) {
    throw new Error('Try refreshing your credentials (session has expired)');
  }
  getAllContacts(session, getContactsCallback);
});
