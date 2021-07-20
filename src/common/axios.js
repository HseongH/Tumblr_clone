// LIBRARY
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://astraios.shop:4000/',
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    'X-Requested-With': 'XMLHttpRequest',
    Accept: '*/*',
  },
});

export default instance;
