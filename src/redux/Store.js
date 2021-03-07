import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import rootReducer from './RootReducer';
import { persistStore } from 'redux-persist';

const middleware = [logger];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, composeEnhancers( applyMiddleware(...middleware)));
export const persistor = persistStore(store);

const stores = { store, persistor };
export default stores;

