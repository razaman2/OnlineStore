import axios
  from 'axios';

export const http = axios.create({
  // baseURL: 'http://192.168.1.143:8000/api/'
  baseURL: 'http://localhost:8000/api/'
});
