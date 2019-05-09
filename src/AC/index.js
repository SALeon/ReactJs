import { MOVIE_API } from '../constants/staticData';
import { SUCCESS_RES, START, SUCCESS, FAIL, NOT_FOUND, NOT_FOUND_RES } from '../constants';
import getMovieCall from '../services/api.service';

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

// example using own custom middleware
export const LOAD_MOVIES = 'LOAD_MOVIES';
export function loadAllMovies() {
  return {
    type: LOAD_MOVIES,
    callApi: `${MOVIE_API}/movies?limit=30`,
  };
}

// example using thunk middleware
export const LOAD_MOVIE = 'LOAD_MOVIE';
export function loadMovie(id) {
  return (dispatch) => {
    dispatch({
      type: LOAD_MOVIE + START,
    });

    getMovieCall(`/movies/${id}`)
      .then((res) => {
        if (res.status === SUCCESS_RES) {
          dispatch({
            type: LOAD_MOVIE + SUCCESS,
            payload: res.data,
          });
        } else if (res.status === NOT_FOUND_RES) {
          dispatch({
            type: LOAD_MOVIE + NOT_FOUND,
          });
        } else {
          dispatch({
            type: LOAD_MOVIE + FAIL,
          });
        }
      });
  };
}
