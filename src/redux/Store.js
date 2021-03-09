import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './RootReducer';
import { persistStore } from 'redux-persist';

const middleware = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let initStore = createStore(rootReducer,applyMiddleware(...middleware));

if (process.env.NODE_ENV === 'development') {
  middleware.push(logger);
  initStore = createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware)));
}

export const store = initStore;
export const persistor = persistStore(store);
export const stores = { store, persistor };

