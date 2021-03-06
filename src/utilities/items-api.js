import sendRequest from './send-request';

const BASE_URL = '/api/items';

export function getAll() {
  return sendRequest(BASE_URL);  //returns what the controller function sends as a json 
}

export function getById(id) {
  return sendRequest(`${BASE_URL}/${id}`);
}