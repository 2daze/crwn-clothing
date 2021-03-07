import { combineReducers } from 'redux';
import userReducer from './UserReducer';
import cartReducer from './CartReducer';
import directoryReducer from './DirectoryReducer';
import shopReducer from './ShopReducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'] //list of reducers that will persist data
}


const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer
});

export default persistReducer(persistConfig, rootReducer);

