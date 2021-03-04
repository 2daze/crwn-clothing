import { CartActionTypes } from './ActionTypes';

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN
  //payload is optional on the action
});

export const addItem = (item) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
});
