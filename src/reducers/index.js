import { combineReducers } from 'redux';
import product from './product';
import user from './user';
import category from './category';

export const reducer = combineReducers({
  product,
  user,
  category
});