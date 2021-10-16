import types from './types';

const creators = {
  fetch: ({userList, fetchError}) => ({
    type: types.FETCH_USERS,
    userList,
    fetchError
  }),
  login: ({user, loginError}) => ({
    type: types.LOGIN,
    user,
    loginError,
  }),
  getCurrentUser: ({ user, currentUserError }) => ({
    type: types.GET_CURRENT_USER,
    user,
    currentUserError
  }),
  register: ({result, registerError}) => ({
    type: types.REGISTER,
    result,
    registerError
  }),
  confirm: ({result, confirmError}) => ({
    type: types.CONFIRM,
    result,
    confirmError
  }),
  loading: (isLoading) => ({
    type: types.LOADING,
    isLoading
  }),
  logout: () => ({
    type: types.LOGOUT
  }),
  clear: (typeName) => ({
    type: typeName,
    user: {},
    error: {},
    isLoading: false
  })
}

export default creators;