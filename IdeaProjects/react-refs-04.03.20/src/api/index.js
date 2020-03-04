import axios from 'axios';

const baseUrl = 'http://192.168.0.106:3000/api/';

axios.interceptors.request.use( function (config) {
  config.headers.authorization = '6';
  return config;
} );

/**
 * @param {object} data
 * @returns {Promise<AxiosResponse<T>>}
 */
export async function postTask (data) {
  return axios.post( `${baseUrl}task`, data );
}

/**
 *
 * @returns {Promise<AxiosResponse<T>>}
 */
export async function getUserTasks () {
  return axios.get( `${baseUrl}tasks` );
}

export async function updateTaskById (id, data) {
  return axios.put( `${baseUrl}task/${id}`, data );
}

export async function getUsers () {
  return axios.get( `${baseUrl}admin/users` );
}