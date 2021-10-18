import types from './types';

const creators = {
  getCategories: ({categories}) => ({
    type: types.GET_CATEGORIES,
    categories
  }),
  add: ({category}) => ({
    type: types.ADD_CATEGORY,
    category
  }),
  delete: ({category}) => ({
    type: types.DELETE_CATEGORY,
    category
  }),
  loading: ({isLoading}) => ({
    type: types.LOADING,
    isLoading
  })
}

export default creators;