import axios from 'axios';
import { getToken } from '../utils/token';
import apiURL from '../actions/urls';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
  (error) => { 
    let errorMessage = "";
    if(!!error.response.data) {
      errorMessage = error.response.data;
    } else if(!!error.response) {
      errorMessage = error.response;
    }
    toast.error(
      errorMessage, {
        position:"top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
      }
    );
    return error;
  }
);

export default Axios;