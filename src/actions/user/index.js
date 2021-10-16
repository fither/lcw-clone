import creators from './creators';
import Axios from '../../plugins/axios';
import types from './types';
import { setToken } from '../../utils/token';
import { toast } from 'react-toastify';

export function login(auth) {
  return async (dispatch) => {
    dispatch(creators.loading(true));
    
    Axios.post('/auth', auth)
    .then((response) => {
      if(!!response.data) {
        setToken(response.data.token);
        dispatch(creators.login({user: response.data}));
        toast.success('Logged in successfully');
      }
    });
    dispatch(creators.loading(false));
    dispatch(creators.clear(types.LOGIN));
  }
}

export function register(auth) {
  return async (dispatch) => {
    dispatch(creators.loading(true))
    await Axios.post('/users', auth)
    .then((response) => {
      if(response.data) {
        dispatch(creators.register({registerResult: response.data}));
        toast.success(response.data);
      }
    });
    dispatch(creators.loading(false))
  }
}

export function fetch() {
  return async (dispatch) => {
    dispatch(creators.loading(true));

    Axios.get('/users')
    .then((response) => {
      if(response.data) {
        dispatch(creators.fetch({userList: response.data}));
      }
    });

    dispatch(creators.loading(false));
  }
}

export function getCurrentUser() {
  return async (dispatch) => {
    dispatch(creators.loading(true));

    Axios.get('/auth')
    .then((response) => {
      if(response.data) {
        dispatch(creators.getCurrentUser({user: response.data}));
      }
    });

    dispatch(creators.loading(false));
  }
}

export function confirm(confirmForm) {
  return async (dispatch) => {
    dispatch(creators.loading(true));
    Axios.post('/users/confirm', confirmForm)
    .then((response) => {
      if(response.data) {
        dispatch(creators.confirm({confirmResult: response.data}));
        toast.success(response.data);
      }
    });
    dispatch(creators.loading(false));
  }
}

export function logout() {
  return async (dispatch) => {
    dispatch(creators.logout());
    toast.success('Logged out successfully');
  }
}