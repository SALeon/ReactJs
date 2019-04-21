import { START, SUCCESS, FAIL } from '../constants';
import { LOAD_MOVIES } from '../AC';
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
  items: [],
};

export default (movies = defaultMovies, action) => {
  const { payload, type } = action;

  switch (type) {
    case LOAD_MOVIES + START:
      return {
        ...movies,
        loading: true,
      };
    case LOAD_MOVIES + SUCCESS:
      return {
        ...movies,
        leaded: true,
        loading: false,
        items: payload.data,
      };
    case LOAD_MOVIES + FAIL:
      return {
        ...movies,
        loading: false,
        loaded: false,
      };
    default: return movies;
  }
};
