import actionTypes from '../actions/actionTypes';

const initial_state = {
  user: {},
  error: {}
}

export default function userReducer(state = initial_state, action) {
  switch(action.type) {
    case actionTypes.LOGIN_SUCCESS:
      return { user: action.payload };
    case actionTypes.LOGIN_FAILURE:
      return { error: action.payload }
    case actionTypes.LOGIN_CLEAR_ERRORS:
      return { error: action.payload }
    default:
      return state;
  }
}