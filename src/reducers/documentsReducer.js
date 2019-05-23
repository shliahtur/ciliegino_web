import { RECEIVE_DOCUMENTS, ADD_DOCUMENT, REMOVE_DOCUMENT, REPLACE_DOCUMENT} from '../actions';

const initialState = { documents: [] }
export default function documentsReducer(state = initialState, action) {
    switch (action.type) {
        case RECEIVE_DOCUMENTS:
            return action.documents;
        case ADD_DOCUMENT:
            return [action.payload, ...state];
        case REMOVE_DOCUMENT:
            return state.filter(document => document.RequestId !== action.payload.RequestId);
        case REPLACE_DOCUMENT:
            return state.map((document) => {
                if (document.RequestId === action.payload.RequestId) {
                    return {
                        ...document,
                        title: action.payload.title,
                        content: action.payload.content,
                    }
                } else return document;
            })
        default:
            return state;
    }
}