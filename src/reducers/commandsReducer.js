import { GET_ACCOUNTS_BY_REQUEST, UPDATE_PARTICIPANTS_BY_REQUEST }
    from '../actions';

export default function commandsReducer(state = {}, action) {
    switch (action.type) {
        case GET_ACCOUNTS_BY_REQUEST:
            return action.accountsResponse;
        case UPDATE_PARTICIPANTS_BY_REQUEST:
            return action.participantsResponse;
        default:
            return state;
    }
};