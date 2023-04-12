import axios from 'axios';

const fetchApi = axios.create({
  baseURL: 'https://aj-market.vercel.app/api',
  withCredentials: true,
});

export default fetchApi;
