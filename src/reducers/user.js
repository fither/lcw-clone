import types from '../actions/user/types';

const initial_state = {
  user: {},
  error: {},
  isLoading: false,
  userList: []
}

export default function userReducer(state = initial_state, action) {
  switch(action.type) {
    case types.LOGIN:
      return {
        ...state,
        user: action.user, 
        error: action.error, 
        isLoading: action.isLoading 
      }
    case types.FETCH_USERS:
      return {
        ...state,
        userList: action.userList,
        error: action.error,
        isLoading: action.isLoading
      }
    case types.GET_CURRENT_USER:
      return {
        ...state,
        user: action.user,
        error: action.error,
        isLoading: action.isLoading
      }
    case types.REGISTER:
      return {
        ...state,
        user: action.user,
        error: action.error,
        isLoading: action.isLoading
      }
    case types.LOGOUT:
      return {
        ...state,
        user: {},
        error: {},
        isLoading: false
      }
    case types.LOGIN_CLEAR_ERRORS:
      return { error: action.payload }
    default:
      return state;
  }
}