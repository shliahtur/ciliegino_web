import { combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading-bar'
import documents from './documentsReducer';
import document from './documentReducer';
import dictionaries from './dictionariesReducer';
import isins from './isinsReducer';
import companies from './companiesReducer';
import alert from './alertReducer';
import spinner from './spinnerReducer';
import corpActions from './corpActionsReducer';


export default combineReducers({
  loadingBar: loadingBarReducer,
  documents: documents,
  document: document,
  dictionaries: dictionaries,
  isins: isins,
  companies: companies,
  alert: alert,
  spinner: spinner,
  corpActions: corpActions,
});