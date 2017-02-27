import assert from 'assert';
import { getAllContacts } from '../src';

describe('typeof', () => {
  it('getAllContacts is a function', () => {
    assert.equal(typeof getAllContacts === 'function', true);
  });
});
