import { SHOW_SPINNER } from '../actions';

const initialState = { isShow: false }
export default function spinnerReducer(state = initialState, action) {
    switch (action.type) {
        case SHOW_SPINNER :
            return {
            ...state,
            isShow : action.payload,
            }
        default:
            return state;
    }
}