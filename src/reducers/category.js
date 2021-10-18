import types from '../actions/category/types';

const initial_state = {
  category: {},
  categories: [],
  isLoading: false
}

export default function categoryReducer(state = initial_state, action) {
  switch(action.type) {
    case types.GET_CATEGORIES:
      return {
        ...state,
        categories: action.categories
      }
    case types.ADD_CATEGORY:
      return {
        ...state,
        category: action.category
      }
    case types.DELETE_CATEGORY:
      return {
        ...state,
        category: action.category
      }
    case types.LOADING:
      return {
        ...state,
        isLoading: action.isLoading
      }
    default:
      return state
  }
}