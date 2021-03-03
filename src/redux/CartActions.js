import { CartActionTypes } from './ActionTypes';

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN
  //payload is optional on the action
});
