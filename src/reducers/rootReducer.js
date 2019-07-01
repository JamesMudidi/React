import { combineReducers } from 'redux';
import registerReducer from './registerReducer';
import loginReducer from './loginReducer';
import incidentReducer from './incidentReducer';

const rootReducer = combineReducers({
  registerReducer,
  incidentReducer,
  loginReducer,
});

export default rootReducer;
