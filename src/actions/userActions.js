import * as userActionsCreators from './userActionsCreators';
import axios from 'axios';
import apiURL from './urls';

export function login(auth) {
  return async (dispatch) => {
    dispatch(userActionsCreators.loginClearErrors());
    axios.post(
      apiURL + '/auth',
      auth
    )
    .then((response) => {
      dispatch(userActionsCreators.loginSuccess(response.data));
    })
    .catch((err) => {
      dispatch(userActionsCreators.loginFailure(err.response));
    })
  }
}