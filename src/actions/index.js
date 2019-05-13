import axios from 'axios';
import history from '../history';

export const RECEIVE_DOCUMENTS = 'GET_DOCUMENTS';
export const ADD_DOCUMENT = 'ADD_DOCUMENT';
export const RECEIVE_DOCUMENT = 'RECEIVE_DOCUMENT';
export const REMOVE_DOCUMENT = 'REMOVE_DOCUMENT';
export const UPDATE_DOCUMENT = 'UPDATE_DOCUMENT';
export const REPLACE_DOCUMENT = 'REPLACE_DOCUMENT';


const apiUrl = 'https://localhost:44326/api/RequestData';

export const getDocuments = () => {
  return (dispatch) => {
    return axios.get(`${apiUrl}/RegRequestsSelect`)
      .then(response => {
        dispatch({ type: RECEIVE_DOCUMENTS, documents: response.data })
      })
      .catch(error => { throw (error); });
  };
};


export const addDocument = ({ RequestTypeId, CounterPartyCode, CounterPartyName, DocumentDate, RecieveDate,
  InNum, OutNum, InDate, OutDate, RequestId, RecordDate, IssuerCode, IssuerEdrici, IssuerName,
  Isin, Fitext, ReasonCode, ReasonText, Code }) => {
  return (dispatch) => {

    return axios.post(`${apiUrl}/RegRequestCreate`, {
      RequestTypeId, CounterPartyCode, CounterPartyName, DocumentDate, RecieveDate,
      InNum, OutNum, InDate, OutDate, RequestId, RecordDate, IssuerCode, IssuerEdrici, IssuerName,
      Isin, Fitext, ReasonCode, ReasonText, Code
      })
      .then(response => {
        let data = response.data;

        dispatch({
          type: ADD_DOCUMENT, payload: {
            RequestTypeId: data.RequestTypeId, CounterPartyCode: data.CounterPartyCode, CounterPartyName: data.CounterPartyName, DocumentDate: data.DocumentDate, RecieveDate: data.RecieveDate,
            InNum: data.InNum, OutNum: data.OutNum, InDate: data.InDate, OutDate: data.OutDate, RequestId: data.RequestId, RecordDate: data.RecordDate, IssuerCode: data.IssuerCode, IssuerEdrici: data.IssuerEdrici,
            IssuerName: data.IssuerName, Isin: data.Isin, Fitext: data.Fitext, ReasonCode: data.ReasonCode, ReasonText: data.ReasonText, Code: data.Code
          }
        })
      })
      .then(() => {
        history.push("/documents")
      })
      .catch(error => { throw (error) });
  };
};

export const getDocument = (id) => {
  return (dispatch) => {
    return axios.get(`${apiUrl}/RegRequestsSelectById/${id}`)
      .then(response => {
        dispatch({ type: RECEIVE_DOCUMENT, document: response.data });
      })
      .catch(error => {
        throw (error);
      });
  };
};

export const deleteDocument = (id) => {
  return (dispatch) => {
    return axios.delete(`${apiUrl}/${id}.json`)
      .then(response => {
        dispatch({ type: REMOVE_DOCUMENT, payload: { id } })
      })
      .then(() => {
        history.push("/documents")
      })
      .catch(error => {
        throw (error);
      });
  };
};

export const updateDocument = (document) => {
  const documentId = document.id;
  return (dispatch) => {
    return axios.patch(`${apiUrl}/${document.id}.json`, { title: document.title, content: document.content })
      .then(response => {
        const data = response.data;
        dispatch({ type: UPDATE_DOCUMENT, payload: { id: data.id, title: data.title, content: data.content } })
        dispatch({ type: REPLACE_DOCUMENT, payload: { id: data.id, title: data.title, content: data.content } })
      })
      .then(() => {
        history.push(`/documents/${documentId}`)
      })
      .catch(error => { throw (error) });
  };
};