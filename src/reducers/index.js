import { combineReducers } from 'redux';
import product from './product';
import user from './user';

export const reducer = combineReducers({
  product,
  user
});