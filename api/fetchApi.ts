import axios from 'axios';

const fetchApi = axios.create({
  baseURL: 'http://localhost:3001/api',
});

fetchApi.interceptors.request.use((config) => {
  config.headers = {
    ...config.headers,
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  };

  return config;
});

export default fetchApi;
