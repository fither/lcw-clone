import types from './types';

const creators = {
  getProducts: ({products}) => ({
    type: types.GET_PRODUCTS,
    products
  }),
  getCategories: ({categories}) => ({
    type: types.GET_CATEGORIES,
    categories
  }),
  delete: ({product}) => ({
    type: types.DELETE_PRODUCT,
    product
  }),
  add: ({product}) => ({
    type: types.ADD_PRODUCT,
    product
  }),
  loading: (isLoading) => ({
    type: types.LOADING,
    isLoading
  }),
}

export default creators;