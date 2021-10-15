import types from '../actions/product/types';

const initial_state = {
  products: [],
  error: {},
  isLoading: false
}

export default function productReducer(state = initial_state, action) {
  switch(action.type) {
    case types.GET_PRODUCTS:
      return { 
        products: action.products,
        error: action.error,
        isLoading: action.isLoading
      }
    default:
      return state;
  }
}