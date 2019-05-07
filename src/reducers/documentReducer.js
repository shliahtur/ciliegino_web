import { RECEIVE_DOCUMENT, UPDATE_DOCUMENT } from '../actions';

export default function documentReducer(state = {}, action) {
  switch (action.type) {
    case RECEIVE_DOCUMENT:
      return action.document;
    case UPDATE_DOCUMENT:
      return {
        id: action.id,
        title: action.payload.title,
        content: action.payload.content,
      }
    default:
      return state;
  }
};