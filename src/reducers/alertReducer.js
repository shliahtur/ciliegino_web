import { SHOW_ALERT } from '../actions';

const initialState = { alertMessage: "", isAlert: false }
export default function alertReducer(state = initialState, action) {
    switch (action.type) {
        case SHOW_ALERT :
            return {
            ...state,
            isAlert : true,
            isPreloader: false,
            alertMessage: action.payload,
            }
        default:
            return state;
    }
}