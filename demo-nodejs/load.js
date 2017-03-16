const fs = require('fs');
const iCloud = require('icloud-session').default;
const getAllContacts = require('../lib').getAllContacts;

function loadSessionFile(sessionPath, callback) {
  let session;
  try {
    session = fs.readFileSync(sessionPath);
    session = JSON.parse(session);
  } catch (e) {
    callback(e);
    return;
  }
  iCloud.validateSession(session, callback);
}

function getContactsCallback(err, body) {
  console.log(err, body);
}

loadSessionFile('session.json', (err, session) => {
  if (err) {
    throw new Error('Try refreshing your credentials (session has expired)');
  }
  getAllContacts(session, getContactsCallback);
});
