import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/rootReducer';

const enhancers = composeWithDevTools(applyMiddleware(thunk));
const store = createStore(rootReducer, {}, enhancers);

export default store;
