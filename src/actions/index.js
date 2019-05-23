import axios from 'axios';
import history from '../history';
import { showLoading, hideLoading } from 'react-redux-loading-bar'

export const RECEIVE_DOCUMENTS = 'GET_DOCUMENTS';
export const ADD_DOCUMENT = 'ADD_DOCUMENT';
export const RECEIVE_DOCUMENT = 'RECEIVE_DOCUMENT';
export const REMOVE_DOCUMENT = 'REMOVE_DOCUMENT';
export const UPDATE_DOCUMENT = 'UPDATE_DOCUMENT';
export const REPLACE_DOCUMENT = 'REPLACE_DOCUMENT';
export const RECEIVE_DICTIONARIES = 'RECEIVE_DICTIONARIES';



const apiUrl = 'https://localhost:44326/api/RequestData';

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
    dispatch(showLoading())
    axios.post(`${apiUrl}/RegRequestCreate`, props)
      .then(({ data }) => {
         (dispatch) => {    
            dispatch({
                type: ADD_DOCUMENT,
                payload: data
            });
            dispatch(hideLoading())
      }})
      .then(() => {
        history.push("/")
      })
      .catch(error => { throw (error) });
  };
};

export const getDocument = (RequestId) => {
  return (dispatch) => {
    dispatch(showLoading())
    return axios.get(`${apiUrl}/RegRequestsSelectById/${RequestId}`)
      .then(response => {
        dispatch({ type: RECEIVE_DOCUMENT, document: response.data });
        dispatch(hideLoading())
      })
      .catch(error => {
        throw (error);
      });
  };
};

export const deleteDocument = (RequestId) => {
  return (dispatch) => {
    dispatch(showLoading())
    return axios.delete(`${apiUrl}/RegRequestDelete/${RequestId}`)
      .then(response => {
        dispatch({ type: REMOVE_DOCUMENT, payload: { RequestId } })
        dispatch(hideLoading())
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
    dispatch(showLoading())
    return axios.put(`${apiUrl}/RegRequestUpdate/${document.RequestId}`, { 
      RequestId: document.RequestId,
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
      WithBank: document.WithBank,
      WithTemp: document.WithTemp,
      IsTerm: document.IsTerm,
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
        dispatch({ type: UPDATE_DOCUMENT, payload: { 
          RequestId: data.RequestId,
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
          } })
        dispatch({ type: REPLACE_DOCUMENT, payload: { 
          RequestId: data.RequestId,
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
        } })
        dispatch(hideLoading())
      })
      .then(() => {
        history.push(`/documents/${documentId}`)
      })
      .catch(error => { throw (error) });
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