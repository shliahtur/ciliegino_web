const requestDocumentsType = 'REQUEST_DOCUMENTS';
const receiveDocumentsType = 'RECEIVE_DOCUMENTS';
const addDocumentType = 'ADD_DOCUMENT';
const initialState = { documents: [], isLoading: false };

export const actionCreators = {
  requestDocuments: startDateIndex => async (dispatch, getState) => {
    if (startDateIndex === getState().documents.startDateIndex) {
      // Don't issue a duplicate request (we already have or are loading the requested data)
      return;
    }
    
    dispatch({ type: requestDocumentsType, startDateIndex});

    const url = '/api/RequestData/RegRequestsSelect';
    const response = await fetch(url);
    const documents = await response.json();

    dispatch({ type: receiveDocumentsType, startDateIndex, documents });
  },
  addDocument: async ({ title, content }) => {
    return (dispatch) => {
    return fetch('https://mywebsite.com/endpoint/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstParam: 'yourValue',
        secondParam: 'yourOtherValue',
      })
    }).then((response) => response.json())
      .then((responseJson) => {
        return responseJson.success;
      })
      .then(() => {
        history.push("/datatable")
      })
      .catch((error) => {
        console.error(error);
      });
    }
    }
  };


export const reducer = (state, action) => {
  state = state || initialState;

  if (action.type === requestDocumentsType) {
    
      return {
        ...state,
          startDateIndex: action.startDateIndex,
        isLoading: true
      };
    }

    if (action.type === receiveDocumentsType) {
      return {
        ...state,
        startDateIndex: action.startDateIndex,
        documents: action.documents,
        isLoading: false
      };
    }

    return state;
  
};