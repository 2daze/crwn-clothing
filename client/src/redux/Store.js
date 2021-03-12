import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import rootReducer from './RootReducer';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import { RootSaga } from './RootSaga';

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let initStore = createStore(rootReducer,applyMiddleware(...middleware));

if (process.env.NODE_ENV === 'development') {
  middleware.push(logger);
  initStore = createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware)));
}

export const store = initStore;
sagaMiddleware.run(RootSaga);
export const persistor = persistStore(store);
export const stores = { store, persistor };

