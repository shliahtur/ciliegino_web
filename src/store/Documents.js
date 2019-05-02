const requestDocumentsType = 'REQUEST_DOCUMENTS';
const receiveDocumentsType = 'RECEIVE_DOCUMENTS';
const initialState = { documents: [], isLoading: false };

export const actionCreators = {
  requestDocuments: startDateIndex => async (dispatch, getState) => {
    if (startDateIndex === getState().documents.startDateIndex) {
      // Don't issue a duplicate request (we already have or are loading the requested data)
      return;
    }

    dispatch({ type: requestDocumentsType, startDateIndex });

    const url = `/api/RequestData/RegRequestsSelect`;
    const response = await fetch(url);
    const documents = await response.json();

    dispatch({ type: receiveDocumentsType, startDateIndex, documents });
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