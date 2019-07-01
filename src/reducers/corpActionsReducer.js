import { GET_CORP_ACTIONS, ADD_CORP_ACTION, } 
from '../actions';

export default function corpActionsReducer(state = {}, action) {
  switch (action.type) {
    case GET_CORP_ACTIONS:
      return action.corpActions;
      case ADD_CORP_ACTION:
        return [action.payload, ...state]; 
    default:
      return state;
  }
};