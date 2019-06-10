import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './reducers/index';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;


const configureStore = preloadedState => (
  createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunk, logger),
    composeEnhancers(),
  )
);

const store = configureStore({});

export default store;