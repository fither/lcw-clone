import types from './types';

const creators = {
  getProducts: ({products, error, isLoading}) => ({
    type: types.GET_PRODUCTS,
    products,
    error,
    isLoading
  }),
  clear: (typeName) => ({
    type: typeName,
    products: [],
    error: {},
    isLoading: true
  })
}

export default creators;