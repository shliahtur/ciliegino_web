import { RECEIVE_DOCUMENT, UPDATE_DOCUMENT} from '../actions';

export default function documentReducer(state = {}, action) {
  switch (action.type) {
    case RECEIVE_DOCUMENT:
      return action.document;
    case UPDATE_DOCUMENT:
      return {
        RequestId: action.RequestId,
        RequestTypeId: action.RequestTypeId,
        CounterPartyCode: action.CounterPartyCode,
        CounterPartyName: action.CounterPartyName,
        InNum: action.InNum,
        OutNum: action.OutNum,
        RecordDate: action.RecordDate,
        IssuerCode: action.IssuerCode,
        IssuerEdrici: action.IssuerEdrici,
        IssuerName: action.IssuerName,
        Isin: action.Isin,
        Fitext: action.Fitext,
        PaperType_1: action.PaperType_1,
        PaperType_2: action.PaperType_2,
        PaperType_3: action.PaperType_3,
        DigitType_1: action.DigitType_1,
        DigitType_2: action.DigitType_2,
        DigitType_3: action.DigitType_3,
        WithBank: action.WithBank,
        WithTemp: action.WithTemp,
        IsTerm: action.IsTerm,
        ReasonCode: action.ReasonCode,
        ReasonText: action.ReasonText,
        Code: action.Code,
        InDate: action.InDate,
        OutDate: action.OutDate,
        DocumentDate: action.DocumentDate,
        RecieveDate: action.RecieveDate,
      }  
    default:
      return state;
  }
};