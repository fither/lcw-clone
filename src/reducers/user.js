import types from '../actions/user/types';

const initial_state = {
  user: {},
  error: {},
  isLoading: false
}

export default function userReducer(state = initial_state, action) {
  switch(action.type) {
    case types.LOGIN:
      return { 
        user: action.user, 
        error: action.error, 
        isLoading: action.isLoading 
      }
    case types.LOGIN_CLEAR_ERRORS:
      return { error: action.payload }
    default:
      return state;
  }
}