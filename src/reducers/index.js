import { combineReducers } from 'redux';
import documents from './documentsReducer';
import document from './documentReducer';

export default combineReducers({
  documents: documents,
  document: document,
});