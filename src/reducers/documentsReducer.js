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
                        RequestId: action.payload.RequestId,
                        RequestTypeId: action.payload.RequestTypeId,
                        CounterPartyCode: action.payload.CounterPartyCode,
                        CounterPartyName: action.payload.CounterPartyName,
                        InNum: action.payload.InNum,
                        OutNum: action.payload.OutNum,
                        RecordDate: action.payload.RecordDate,
                        IssuerCode: action.payload.IssuerCode,
                        IssuerEdrici: action.payload.IssuerEdrici,
                        IssuerName: action.payload.IssuerName,
                        Isin: action.payload.Isin,
                        Fitext: action.payload.Fitext,
                        PaperType_1: action.payload.PaperType_1,
                        PaperType_2: action.payload.PaperType_2,
                        PaperType_3: action.payload.PaperType_3,
                        DigitType_1: action.payload.DigitType_1,
                        DigitType_2: action.payload.DigitType_2,
                        DigitType_3: action.payload.DigitType_3,
                        WithBank: action.payload.WithBank,
                        WithTemp: action.payload.WithTemp,
                        IsTerm: action.payload.IsTerm,
                        ReasonCode: action.payload.ReasonCode,
                        ReasonText: action.payload.ReasonText,
                        Code: action.payload.Code,
                        InDate: action.payload.InDate,
                        OutDate: action.payload.OutDate,
                        DocumentDate: action.payload.DocumentDate,
                        RecieveDate: action.payload.RecieveDate,
                    }
                } else return document;
            })
        default:
            return state;
    }
}