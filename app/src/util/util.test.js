import * as util from './util';

it('Token functions should set and retrieve token', () => {
  util.setToken('myToken');
  expect(util.getToken()).toEqual('myToken');
  util.clearToken();
  expect(util.getToken()).toBeNull();
});
