import { RECIEVE_COMPANIES } from '../actions';

const initialState = { companies: [] }
export default function companiesReducer(state = initialState, action) {
    switch (action.type) {
        case RECIEVE_COMPANIES:
            return action.companies;
    
        default:
            return state;
    }
}