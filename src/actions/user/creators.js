import types from './types';

const creators = {
  fetch: () => ({
    type: types.FETCH_USERS
  }),
  login: ({user, error, isLoading}) => ({
    type: types.LOGIN,
    user,
    error,
    isLoading
  }),
  clear: (typeName) => ({
    type: typeName,
    user: {},
    error: {},
    isLoading: false
  })
}

export default creators;