import { API } from '../constants/staticData';

export const FILTER_SEARCH = 'FILTER_SEARCH';
export function setSearchCondition(name) {
  return {
    type: FILTER_SEARCH,
    payload: name,
  };
}

export const FILTER_SORT = 'FILTER_SORT';
export function setSelectedCondition(name) {
  return {
    type: FILTER_SORT,
    payload: name,
  };
}

export const SEARCH_VALUE = 'SEARCH_VALUE';
export function setFilteredValue(val) {
  return {
    type: SEARCH_VALUE,
    payload: val,
  };
}

export const LOAD_MOVIES = 'LOAD_MOVIES';
export function loadAllMovies() {
  return {
    type: LOAD_MOVIES,
    callApi: `${API}/movies`,
  };
}
