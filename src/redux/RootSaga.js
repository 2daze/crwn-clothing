import { all, call } from 'redux-saga/effects';
import { shopSagas } from './ShopSagas';
import { userSagas } from './UserSagas';
import { cartSagas } from './CartSagas';

export function* RootSaga() {
  yield all([
    call(shopSagas),
    call(userSagas),
    call(cartSagas)
  ]);
}
