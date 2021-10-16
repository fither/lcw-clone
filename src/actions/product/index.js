import creators from './creators';
import Axios from '../../plugins/axios';

const actions = {
  getProducts: () => {
    return async (dispatch) => {
      dispatch(creators.loading(true));
      Axios.get('/product')
      .then((response) => {
        if(response.data.length) {
          dispatch(creators.getProducts({products: response.data}));
        } else {
          dispatch(creators.getProducts({products: []}));
        }
      });
      dispatch(creators.loading(false));
    }
  },
  getCategories: () => {
    return async (dispatch) => {
      Axios.get('/category')
      .then((response) => {
        if(response.data.length) {
          dispatch(creators.getCategories({ categories: response.data}));
        } else {
          dispatch(creators.getCategories({ categories: []}));
        }
      });
    }
  },
  delete: (id) => {
    return async (dispatch) => {
      dispatch(creators.loading(true));
      Axios.delete('/product', { params: { id } })
      .then((response) => {
        if(!!response.data) {
          dispatch(creators.delete({product: response.data}));
        }
      });
      dispatch(creators.loading(false));
    } 
  },
  add: (product) => {
    return async (dispatch) => {
      dispatch(creators.loading(true));
      Axios.post('/product', product)
      .then((response) => {
        if(!!response.data) {
          dispatch(creators.add({product: response.data}));
        }
      });
      dispatch(creators.loading(false));
    }
  }
}

export default actions;