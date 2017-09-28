import { requestICloudData } from 'icloud-session';
import qs from 'querystring';

export function getAllContacts(session, callback = () => {}) {
  const contactUrl = `${session.webservices.contacts.url}/co/startup`;
  const search = qs.stringify({
    locale: 'en_US',
    order: 'last,first',
  });
  requestICloudData(session, `${contactUrl}?${search}`, null, callback);
}

export default {
  getAllContacts,
};
