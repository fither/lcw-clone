import axios from 'axios';
import { getToken } from '../utils/token';
import apiURL from '../actions/urls';

const Axios = axios.create({
  baseURL: apiURL
})

Axios.interceptors.request.use(
  (config) => {
    if(!!getToken()) {
      config.headers.common['Authorization'] = 'Bearer ' + getToken();
    }

    return config;
  },
  (error) => {
    return error;
  }
);

Axios.interceptors.response.use(
  (response) => { return response; },
  (error) => { return error; }
);

export default Axios;