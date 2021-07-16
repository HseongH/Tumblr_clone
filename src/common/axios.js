// LIBRARY
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:4000/',
});

instance.interceptors.request.use((config) => {
  config.headers['Content-Type'] = 'application/json; charset=utf-8';
  config.headers['X-Requested-With'] = 'XMLHttpRequest';
  config.headers['Accept'] = '*/*';
  //   config.headers['authorization'] = `Bearer ${getToken()}`;
  return config;
});

export default instance;
