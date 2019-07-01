import {
  AUTHENTICATE,
  GET_INCIDENT_SUCCESS,
  GET_INCIDENT_FAIL,
} from '../../actions/types';

const initialState = {
  isLoading: false,
  incidents: [],
};

const incidentReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATE:
      return {
        ...state,
        isLoading: true,
      };
    case GET_INCIDENT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        incidents: action.payload,
      };
    case GET_INCIDENT_FAIL:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return { state };
  }
};

export default incidentReducer;
