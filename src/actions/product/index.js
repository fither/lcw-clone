import creators from './creators';
import Axios from '../../plugins/axios';
import types from './types';

const actions = {
  getProducts: () => {
  return async (dispatch) => {
    dispatch(creators.clear(types.GET_PRODUCTS));
    Axios.get('/product')
    .then((response) => {
      if(response.data.length) {
        dispatch(creators.getProducts({
          products: response.data,
          error: {},
          isLoading: false
        }));
      }
    })
    .catch((err) => {
      if(!err.data) { err.data = "Service Unavailable"; };
      dispatch(creators.getProducts({
        products: [],
        error: err,
        isLoading: false
      }));
    });
  }
}
}

export default actions;