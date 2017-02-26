import { requestICloudData } from 'icloud-session';
import merge from 'mout/object/merge';
import url from 'url';
import util from 'util';

export function getAllContacts(session, callback) {
  const contactUrl = session.webservices.contacts.url;
  const contactUrlFormatted = util.format('%s/co/startup', contactUrl);
  // params = merge(params, {'dsid': session['dsInfo']['dsid']});
  const params = merge({}, {
    // clientVersion : "2.1",
    locale: 'en_US',
    order: 'last,first',
  });
  const query = merge(url.parse(contactUrlFormatted), {
    qs: params,
  });
  requestICloudData(session, query, null, callback);
}

export default {
  getAllContacts,
};
