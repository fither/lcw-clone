import creators from './creators';
import Axios from '../../plugins/axios';
import types from './types';
import { setToken } from '../../utils/token';

export function login(auth) {
  return async (dispatch) => {
    setTimeout(() => {
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
      })
    }, 2500);
    dispatch(creators.clear(types.LOGIN));
  }
}

export function list() {
  return async (dispatch) => {
    Axios.get('/users')
    .then((response) => {
      dispatch(creators)
    })
  }
}