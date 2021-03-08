import { ShopActionTypes } from './ActionTypes';

export const updateCollections = (collections) => ({
  type: ShopActionTypes.UPDATE_COLLECTIONS,
  payload: collections
});
