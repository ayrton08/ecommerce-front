import axios from 'axios';

const fetchApi = axios.create({
  baseURL: '/api',
});

export default fetchApi;
