import { RECEIVE_ISINS } from '../actions';

const initialState = { isins: [] }
export default function isinsReducer(state = initialState, action) {
    switch (action.type) {
        case RECEIVE_ISINS:
            return action.isins;
    
        default:
            return state;
    }
}