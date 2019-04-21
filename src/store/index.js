import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers';
import api from '../middlewares/api';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = applyMiddleware(
  thunk,
  api,
);
export default createStore(
  reducer,
  {},
  composeEnhancers(enhancer),
);
