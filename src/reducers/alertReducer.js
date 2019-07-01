import { SHOW_ALERT } from '../actions';

const initialState = { isAlert: false }
export default function alertReducer(state = initialState, action) {
    switch (action.type) {
        case SHOW_ALERT :
            return {
            ...state,
            isAlert : true,
            isPreloader: false,
            response: action.payload,
            }
        default:
            return state;
    }
}