import creators from './creators';
import Axios from '../../plugins/axios';
import types from './types';
import { setToken } from '../../utils/token';

export function login(auth) {
  return async (dispatch) => {
    dispatch(creators.loading(true));
    
    Axios.post('/auth', auth)
    .then((response) => {
      if(!!response.data) {
        setToken(response.data.token);
        dispatch(creators.login({user: response.data}));
      } else {
        dispatch(creators.login({error: response.response}));
      }
    })
    .catch((err) => {
      dispatch(creators.login({error: err.response}));
    });
    dispatch(creators.loading(false));
    dispatch(creators.clear(types.LOGIN));
  }
}

export function register(auth) {
  return async (dispatch) => {
    dispatch(creators.loading(true))
    Axios.post('/users', auth)
    .then((response) => {
      if(response.data) {
        dispatch(response.data.token);
        dispatch(creators.register({user: response.data}));
      } else {
        dispatch(creators.register({error: response.response}));
      }
    })
    .catch((error) => {
      dispatch(creators.register({error: error.response}));
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
      } else {
        dispatch(creators.fetch({error: response.response}));
      }
    })
    .catch((error) => {
      dispatch(creators.fetch({error: error.response}));
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
      } else {
        dispatch(creators.getCurrentUser({error: response.response}));
      }
    })
    .catch((error) => {
      dispatch(creators.getCurrentUser({error: error.response}));
    });

    dispatch(creators.loading(false));
  }
}

export function logout() {
  return async (dispatch) => {
    dispatch(creators.logout());
  }
}