import {
  AUTHENTICATE,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
} from '../../actions/types';

const initialState = {
  isLoading: false,
  isLoggedin: false,
  user: {},
};

const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATE:
      return {
        ...state,
        isLoading: true,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLoggedin: true,
        user: action.payload,
      };
    case REGISTER_FAIL:
      return {
        ...state,
        isLoading: false,
        isLoggedin: false,
      };
    default:
      return { state };
  }
};

export default registerReducer;
