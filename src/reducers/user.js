import types from '../actions/user/types';

const initial_state = {
  user: {},
  isLoading: false,
  confirmResult: "",
  userList: []
}

export default function userReducer(state = initial_state, action) {
  switch(action.type) {
    case types.LOGIN:
      return {
        ...state,
        user: action.user
      }
    case types.FETCH_USERS:
      return {
        ...state,
        userList: action.userList
      }
    case types.GET_CURRENT_USER:
      return {
        ...state,
        user: action.user
      }
    case types.REGISTER:
      return {
        ...state,
        registerResult: action.result
      }
    case types.CONFIRM:
      return {
        ...state,
        confirmResult: action.result
      }
    case types.LOADING:
      return {
        ...state,
        isLoading: action.isLoading
      }
    case types.LOGOUT:
      return {
        ...state,
        user: {},
        error: {}
      }
    case types.LOGIN_CLEAR_ERRORS:
      return { error: action.payload }
    default:
      return state;
  }
}