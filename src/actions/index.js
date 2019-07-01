import axios from 'axios';
import history from '../history';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
export const RECEIVE_DOCUMENTS = 'GET_DOCUMENTS';
export const ADD_DOCUMENT = 'ADD_DOCUMENT';
export const RECEIVE_DOCUMENT = 'RECEIVE_DOCUMENT';
export const REMOVE_DOCUMENT = 'REMOVE_DOCUMENT';
export const UPDATE_DOCUMENT = 'UPDATE_DOCUMENT';
export const REPLACE_DOCUMENT = 'REPLACE_DOCUMENT';
export const RECEIVE_DICTIONARIES = 'RECEIVE_DICTIONARIES';
export const RECEIVE_ISINS = 'RECIEVE_ISINS';
export const RECIEVE_COMPANIES = 'RECIEVE_COMPANIES';
export const SHOW_ALERT = 'SHOW_ALERT';
export const SHOW_SPINNER = 'SHOW_SPINNER';
export const GET_CORP_ACTIONS = 'GET_CORP_ACTIONS';
export const ADD_CORP_ACTION = 'ADD_CORP_ACTION';
export const GET_ACCOUNTS_BY_REQUEST = 'GET_ACCOUNTS_BY_REQUEST';
export const UPDATE_PARTICIPANTS_BY_REQUEST = 'UPDATE_PARTICIPANTS_BY_REQUEST';



const apiUrl = 'https://localhost:44309/api/RequestData';

export const getDocuments = () => {
  return (dispatch) => {
    dispatch(showLoading())
    return axios.get(`${apiUrl}/RegRequestsSelect`)
      .then(response => {
        dispatch({ type: RECEIVE_DOCUMENTS, documents: response.data })
        dispatch(hideLoading())
      })
      .catch(error => { throw (error); });
  };
};

export const addDocument = (props) => {
  return (dispatch) => {
    dispatch(showSpinner(true))
    axios.post(`${apiUrl}/RegRequestCreate`, props)
      .then(({ data }) => {
        dispatch({
          type: ADD_DOCUMENT,
          payload: data
        });

      })
      .then(response => {
        dispatch(showSpinner(false))
        dispatch(showAlert(response));
      })
      .then(() => {
        history.push("/")
      })
      .catch(error => {
        dispatch(showSpinner(false))
        dispatch(showAlert(error.response));
      });
  };
};

export const showAlert = (message) => ({
  type: SHOW_ALERT,
  payload: message,
})
export const showSpinner = (isShow) => ({
  type: SHOW_SPINNER,
  payload: isShow
})

export const getDocument = (RequestId) => {
  return (dispatch) => {
    return axios.get(`${apiUrl}/RegRequestsSelectById/${RequestId}`)
      .then(response => {
        dispatch({ type: RECEIVE_DOCUMENT, document: response.data });
      })
      .catch(error => {
        throw (error);
      });
  };
};

export const deleteDocument = (RequestId) => {
  return (dispatch) => {
    dispatch(showSpinner(true))
    return axios.delete(`${apiUrl}/RegRequestDelete/${RequestId}`)
      .then(response => {
        dispatch({ type: REMOVE_DOCUMENT, payload: { RequestId } })
        dispatch(showSpinner(false))
      })
      .then(() => {
        history.push("/")
      })
      .catch(error => {
        throw (error);
      });
  };
};

export const updateDocument = (document) => {
  const documentId = document.RequestId;
  return (dispatch) => {
    dispatch(showSpinner(true))
    return axios.put(`${apiUrl}/RegRequestUpdate/${document.RequestId}`, {
      RequestId: document.RequestId,
      RequestTypeId: document.RequestTypeId,
      CounterPartyCode: document.CounterPartyCode,
      CounterPartyName: document.CounterPartyName,
      InNum: document.InNum,
      OutNum: document.OutNum,
      RecordDate: document.RecordDate,
      IssuerCode: document.IssuerCode,
      IssuerEdrici: document.IssuerEdrici,
      IssuerName: document.IssuerName,
      Isin: document.Isin,
      Fitext: document.Fitext,
      PaperType_1: document.PaperType_1,
      PaperType_2: document.PaperType_2,
      PaperType_3: document.PaperType_3,
      DigitType_1: document.DigitType_1,
      DigitType_2: document.DigitType_2,
      DigitType_3: document.DigitType_3,
      IsTerm: document.IsTerm,
      WithBank: document.WithBank,
      WithTemp: document.WithTemp,
      ReasonCode: document.ReasonCode,
      ReasonText: document.ReasonText,
      Code: document.Code,
      InDate: document.InDate,
      OutDate: document.OutDate,
      DocumentDate: document.DocumentDate,
      RecieveDate: document.RecieveDate,
    })
      .then(response => {
        const data = response.data;
        dispatch({
          type: UPDATE_DOCUMENT, payload: {
            RequestId: data.RequestId,
            RequestTypeId: data.RequestTypeId,
            CounterPartyCode: data.CounterPartyCode,
            CounterPartyName: data.CounterPartyName,
            InNum: data.InNum,
            OutNum: data.OutNum,
            RecordDate: data.RecordDate,
            IssuerCode: data.IssuerCode,
            IssuerEdrici: data.IssuerEdrici,
            IssuerName: data.IssuerName,
            Isin: data.Isin,
            Fitext: data.Fitext,
            PaperType_1: data.PaperType_1,
            PaperType_2: data.PaperType_2,
            PaperType_3: data.PaperType_3,
            DigitType_1: data.DigitType_1,
            DigitType_2: data.DigitType_2,
            DigitType_3: data.DigitType_3,
            WithBank: data.WithBank,
            WithTemp: data.WithTemp,
            IsTerm: data.IsTerm,
            ReasonCode: data.ReasonCode,
            ReasonText: data.ReasonText,
            Code: data.Code,
            InDate: data.InDate,
            OutDate: data.OutDate,
            DocumentDate: data.DocumentDate,
            RecieveDate: data.RecieveDate,
          }
        })
        dispatch({
          type: REPLACE_DOCUMENT, payload: {
            RequestId: data.RequestId,
            RequestTypeId: data.RequestTypeId,
            CounterPartyCode: data.CounterPartyCode,
            CounterPartyName: data.CounterPartyName,
            InNum: data.InNum,
            OutNum: data.OutNum,
            RecordDate: data.RecordDate,
            IssuerCode: data.IssuerCode,
            IssuerEdrici: data.IssuerEdrici,
            IssuerName: data.IssuerName,
            Isin: data.Isin,
            Fitext: data.Fitext,
            PaperType_1: data.PaperType_1,
            PaperType_2: data.PaperType_2,
            PaperType_3: data.PaperType_3,
            DigitType_1: data.DigitType_1,
            DigitType_2: data.DigitType_2,
            DigitType_3: data.DigitType_3,
            WithBank: data.WithBank,
            WithTemp: data.WithTemp,
            IsTerm: data.IsTerm,
            ReasonCode: data.ReasonCode,
            ReasonText: data.ReasonText,
            Code: data.Code,
            InDate: data.InDate,
            OutDate: data.OutDate,
            DocumentDate: data.DocumentDate,
            RecieveDate: data.RecieveDate,
          }
        })
        dispatch(showSpinner(false))
        dispatch(showAlert(response));
      })
      .then(() => {
        history.push(`/documents/${documentId}`)
      })
      .catch(error => {
        dispatch(showSpinner(false))
        dispatch(showAlert(error.response));
      });
  };
};

export const getDictionaries = () => {
  return (dispatch) => {
    dispatch(showLoading())
    return axios.get(`${apiUrl}/GetRefrences`)
      .then(response => {
        dispatch({ type: RECEIVE_DICTIONARIES, dictionaries: response.data })
        dispatch(hideLoading())
      })
      .catch(error => { throw (error); });
  };
};

export const getIsins = (startWith) => {
  return (dispatch) => {
    startWith = startWith.toUpperCase();
    return axios.get(`${apiUrl}/GetISINs/${startWith}`)
      .then(response => {
        dispatch({ type: RECEIVE_ISINS, isins: response.data })
      })
      .catch(error => { throw (error); });
  };
};

export const getCompanies = (startWith) => {
  return (dispatch) => {
    return axios.get(`${apiUrl}/GetEmitents/${startWith}`)
      .then(response => {
        dispatch({ type: RECIEVE_COMPANIES, companies: response.data })
      })
      .catch(error => { throw (error); });
  };
};

export const getCorpActions = (RequestId) => {
  return (dispatch) => {
    return axios.get(`${apiUrl}/GetCAForRequest/${RequestId}`)
      .then(response => {
        dispatch({ type: GET_CORP_ACTIONS, corpActions: response.data });
      })
      .catch(error => {
        throw (error);
      });
  };
};

export const addCorpAction = (props) => {
  return (dispatch) => {
    dispatch(showSpinner(true))
    axios.post(`${apiUrl}/MatchRequestAndCA`, props)
      .then(({ data }) => {
        dispatch({
          type: ADD_CORP_ACTION,
          payload: data
        });

      })
      .then(response => {
        dispatch(showSpinner(false))
        dispatch(showAlert(response));
      })
      .catch(error => {
        dispatch(showSpinner(false))
        dispatch(showAlert(error.response));
      });
  };
};

export const getAccountsByRequest = (RequestId) => {
  return (dispatch) => {
    dispatch(showSpinner(true))
    return axios.get(`${apiUrl}/CommandGetAccountsByRequest/${RequestId}`)
      .then(response => {
        dispatch({ type: GET_ACCOUNTS_BY_REQUEST, accountsResponse: response.data })
        dispatch(showSpinner(false))
        dispatch(showAlert(response));
      })

      .catch(error => {
        dispatch(showSpinner(false))
        dispatch(showAlert(error.response));
      });
  };
};

export const updateParticipantsByRequest = (RequestId) => {
  return (dispatch) => {
    dispatch(showSpinner(true))
    return axios.get(`${apiUrl}/CommandUpdateParticipantsByRequest/${RequestId}`)
      .then(response => {
        dispatch({ type: UPDATE_PARTICIPANTS_BY_REQUEST, participantsResponce: response.data })
        dispatch(showSpinner(false))
        dispatch(showAlert(response))
      })
      .catch(error => {
        dispatch(showSpinner(false))
        dispatch(showAlert(error.response));
      });
  };
};

