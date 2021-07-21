// LIBRARY
import axios from 'axios';

// FUNCTION
import { getCookie } from './cookie';

axios.defaults.withCredentials = true;

const instance = axios.create({
  baseURL: 'http://astraios.shop:4000/',
});

instance.interceptors.request.use((config) => {
  config.headers['Content-Type'] = 'application/json; charset=utf-8';
  config.headers['X-Requested-With'] = 'XMLHttpRequest';
  config.headers['Accept'] = '*/*';
  config.headers['authorization'] = getCookie();
  return config;
});

export default instance;
