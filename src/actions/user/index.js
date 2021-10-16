import creators from './creators';
import Axios from '../../plugins/axios';
import types from './types';
import { setToken } from '../../utils/token';

export function login(auth) {
  return async (dispatch) => {
    Axios.post('/auth', auth)
    .then((response) => {
      setToken(response.data.token);
      dispatch(creators.login({
        user: response.data,
        error: {},
        isLoading: false
      }));
    })
    .catch((err) => {
      dispatch(creators.login({
        user: {},
        error: err.response,
        isLoading: false
      }));
    });
    dispatch(creators.clear(types.LOGIN));
  }
}

export function register(auth) {
  return async (dispatch) => {
    dispatch(creators.register({
      user: {},
      error: {},
      isLoading: true
    }))
    Axios.post('/users', auth)
    .then((response) => {
      if(response.data) {
        dispatch(creators.register({
          user: response.data,
          error: {},
          isLoading: false
        }));
      }
    })
    .catch((error) => {
      dispatch(creators.register({
        user: {},
        error: error.response,
        isLoading: false
      }));
    });
  }
}

export function fetch() {
  return async (dispatch) => {
    dispatch(creators.fetch({
      userList: [],
      error: {},
      isLoading: true
    }))
    Axios.get('/users')
    .then((response) => {
      if(response.data) {
        dispatch(creators.fetch({
          userList: response.data,
          error: {},
          isLoading: false
        }));
      }
    })
    .catch((error) => {
      dispatch(creators.fetch({
        userList: [],
        error: error.response,
        isLoading: false
      }));
    });
  }
}

export function getCurrentUser() {
  return async (dispatch) => {
    dispatch(creators.getCurrentUser({
      user: {},
      error: {},
      isLoading: true
    }))
    Axios.get('/auth')
    .then((response) => {
      if(response.data) {
        dispatch(creators.getCurrentUser({
          user: response.data,
          error: {},
          isLoading: false
        }));
      }
    })
    .catch((error) => {
      dispatch(creators.getCurrentUser({
        user: {},
        error: error.response,
        isLoading: false
      }));
    });
  }
}

export function logout() {
  return async (dispatch) => {
    dispatch(creators.logout());
  }
}