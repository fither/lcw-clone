import * as productActionsCreators from './productActionsCreators';
import axios from 'axios';
import apiURL from './urls';

export function getProducts() {
  return async (dispatch) => {
    axios.get(
      apiURL + '/product'
    )
    .then((response) => {
      if(response.data.length) {
        dispatch(productActionsCreators.getProducts(response.data));
      }
    })
    .catch((err) => {
      console.log(err);
    });
  }
}