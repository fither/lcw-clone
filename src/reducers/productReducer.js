import actionTypes from '../actions/actionTypes';

const initial_state = {
  products: []
}

export default function productReducer(state = initial_state, action) {
  switch(action.type) {
    case actionTypes.GET_PRODUCTS:
      return { products: action.payload }
    default:
      return state;
  }
}