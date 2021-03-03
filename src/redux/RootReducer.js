import { combineReducers } from 'redux';
import userReducer from './UserReducer';
import cartReducer from './CartReducer';

export default combineReducers({
  user: userReducer,
  cart: cartReducer
});
