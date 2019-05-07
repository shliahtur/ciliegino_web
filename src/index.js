import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import App from './components/App';
import rootReducer from './reducers';
import { getDocuments } from './actions';

import './styles/index.css';

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

store.dispatch(getDocuments());

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root'));


