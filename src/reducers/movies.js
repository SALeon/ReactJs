import {
  START, SUCCESS, FAIL, NOT_FOUND,
} from '../constants';
import { LOAD_MOVIES, LOAD_MOVIE } from '../AC';
// {
//   "id": 424785,
//   "title": "Transformers 7",
//   "tagline": "",
//   "vote_average": 0,
//   "vote_count": 0,
//   "release_date": "2019-06-26",
//   "poster_path": "https://image.tmdb.org/t/p/w500/432BowXw7a4fWXSONxBaFKqvW4f.jpg",
//   "overview": "Plot unknown.",
//   "budget": 0,
//   "revenue": 0,
//   "genres": [
//     "Science Fiction",
//     "Action",
//     "Adventure"
//   ],
//   "runtime": null
// }

const defaultMovie = {
  id: null,
  title: '',
  // tagline: '',
  // vote_average: 0,
  vote_count: null,
  release_date: '',
  poster_path: '',
  overview: '',
  budget: null,
  revenue: null,
  genres: [],
  runtime: null,
};

const defaultMovies = {
  loaded: false,
  loading: false,
  notFound: false,
  items: [],
  selected: defaultMovie,
};

export default (movies = defaultMovies, action) => {
  const { payload, type } = action;

  switch (type) {
    case LOAD_MOVIES + START:
      return {
        ...movies,
        loading: true,
        notFound: false,
        loaded: false,
      };
    case LOAD_MOVIES + SUCCESS:
      return {
        ...movies,
        loaded: true,
        loading: false,
        items: payload.data,
      };
    case LOAD_MOVIES + FAIL:
      return {
        ...movies,
        loading: false,
      };
    case LOAD_MOVIES + NOT_FOUND:
      return {
        ...movies,
        items: [],
        loading: false,
        notFound: true,
      };
    case LOAD_MOVIE + START:
      return {
        ...movies,
        loading: true,
        notFound: false,
      };
    case LOAD_MOVIE + SUCCESS:
      return {
        ...movies,
        selected: payload,
        loading: false,
        notFound: false,
      };
    case LOAD_MOVIE + NOT_FOUND:
    case LOAD_MOVIE + FAIL:
      return {
        ...movies,
        loading: false,
        notFound: true,
      };

    default: return movies;
  }
};
