import actionTypes from './actionTypes';

export const login = (auth) => ({
  type: actionTypes.LOGIN,
  payload: auth
});

export const loginSuccess = (data) => ({
  type: actionTypes.LOGIN_SUCCESS,
  payload: data
});

export const loginFailure = (data) => ({
  type: actionTypes.LOGIN_FAILURE,
  payload: data
});

export const loginClearErrors = () => ({
  type: actionTypes.LOGIN_CLEAR_ERRORS,
  payload: {}
});