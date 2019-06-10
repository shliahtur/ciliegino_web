import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import { getDocuments } from './actions';
import store from './store';
import './styles/index.css';

store.dispatch(getDocuments());

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root'));


