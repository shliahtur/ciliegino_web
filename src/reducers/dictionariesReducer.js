import { RECEIVE_DICTIONARIES } from '../actions';

const initialState = { dictionaries: [] }
export default function dictionariesReducer(state = initialState, action) {
    switch (action.type) {

        case RECEIVE_DICTIONARIES:
            return action.dictionaries;
    
        default:
            return state;
    }
}