import actionsTypes from './actionTypes';

export const getProducts = (products) => ({
  type: actionsTypes.GET_PRODUCTS,
  payload: products 
});