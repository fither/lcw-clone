import types from './types';

const creators = {
  fetch: ({userList, error, isLoading}) => ({
    type: types.FETCH_USERS,
    userList,
    error,
    isLoading
  }),
  login: ({user, error, isLoading}) => ({
    type: types.LOGIN,
    user,
    error,
    isLoading
  }),
  getCurrentUser: ({ user, error, isLoading }) => ({
    type: types.GET_CURRENT_USER,
    user,
    error,
    isLoading
  }),
  register: ({user, error, isLoading}) => ({
    type: types.REGISTER,
    user,
    error,
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