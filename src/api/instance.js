import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://api.example.com',
  headers: {
    'Content-type': 'application/json',
  },
});

export default instance;
