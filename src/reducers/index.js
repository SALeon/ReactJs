import { combineReducers } from 'redux';
import filters from './filter';
import movies from './movies';

export default combineReducers({
  filters,
  movies,
});
