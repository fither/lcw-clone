import types from '../actions/product/types';

const initial_state = {
  products: [],
  categories: [],
  isLoading: false
}

export default function productReducer(state = initial_state, action) {
  switch(action.type) {
    case types.GET_PRODUCTS:
      return {
        ...state,
        products: action.products
      }
    case types.DELETE_PRODUCT:
      return {
        ...state,
        product: action.product
      }
    case types.ADD_PRODUCT:
      return {
        ...state,
        product: action.product
      }
    case types.GET_CATEGORIES:
      return {
        ...state,
        categories: action.categories
      }
    case types.LOADING:
      return {
        ...state,
        isLoading: action.isLoading
      }
    default:
      return state;
  }
}