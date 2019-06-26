import { GET_CORP_ACTIONS } from '../actions';

export default function corpActionsReducer(state = {}, action) {
  switch (action.type) {
    case GET_CORP_ACTIONS:
      return action.corpActions;
    default:
      return state;
  }
};