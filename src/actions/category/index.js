import creators from "./creators";
import Axios from "../../plugins/axios";

const actions = {
  getCategories: () => {
    return async (dispatch) => {
      dispatch(creators.loading(true));
      Axios.get('/category')
      .then((response) => {
        if(response.data.length) {
          dispatch(creators.getCategories({categories: response.data}));
        } else {
          dispatch(creators.getCategories({categories: []}));
        }
      });
      dispatch(creators.loading(false));
    }
  },
  add: (category) => {
    return async (dispatch) => {
      dispatch(creators.loading(true));
      Axios.post('/category', category)
      .then((response) => {
        if(!!response.data) {
          dispatch(creators.add({category: response.data}));
        }
      });
      dispatch(creators.loading(false));
    }
  },
  delete: (id) => {
    return async (dispatch) => {
      dispatch(creators.loading(true));
      Axios.delete('/category', { params: { id }})
      .then((response) => {
        if(!!response.data) {
          dispatch(creators.delete({category: response.data}));
        }
      });
      dispatch(creators.loading(false));
    }    
  }
}

export default actions;