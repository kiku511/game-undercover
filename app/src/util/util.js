import constants from '../constants';

// Token helpers
export function getToken() {
  return localStorage.getItem(constants.AUTH_STORE_KEY);
}

export function setToken(token) {
  localStorage.setItem(constants.AUTH_STORE_KEY, token);
}

export function clearToken() {
  localStorage.removeItem(constants.AUTH_STORE_KEY);
}

// RestClient
function _makeFetchRequest(relativeUrl, method, payLoad, useToken) {
  const token = getToken();
  let options = { method: method };
  if (useToken && token) {
    options.headers = {};
    options.headers[constants.AUTH_HEADER_NAME] = `${
      constants.BEARER
    } ${token}`;
  }

  if (method === 'put' || method === 'post' || method === 'patch') {
    options.headers['Content-Type'] = constants.JSON_HEADER_VALUE;
    options.body = JSON.stringify(payLoad);
  }

  return fetch(relativeUrl, options).then(res => {
    if (res.status === 401) {
      clearToken();
    }
    return res.json();
  });
}

export function getCall(relativeUrl, useToken = true) {
  return _makeFetchRequest(relativeUrl, 'get', null, useToken);
}

export function putCall(relativeUrl, payLoad, useToken = true) {
  return _makeFetchRequest(relativeUrl, 'put', payLoad, useToken);
}

export function postCall(relativeUrl, payLoad, useToken = true) {
  return _makeFetchRequest(relativeUrl, 'post', payLoad, useToken);
}

export function deleteCall(relativeUrl, payLoad, useToken = true) {
  return _makeFetchRequest(relativeUrl, 'put', payLoad, useToken);
}
