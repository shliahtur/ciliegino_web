import { combineReducers } from 'redux';
import documents from './documentsReducer';
import document from './documentReducer';
import dictionaries from './dictionariesReducer';

export default combineReducers({
  documents: documents,
  document: document,
  dictionaries: dictionaries,
});