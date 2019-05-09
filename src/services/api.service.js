import axios from 'axios';
import { MOVIE_API } from '../constants/staticData';

export default function getMovieCall(url) {
  return axios.get(MOVIE_API + url)
    .then(res => ({
      data: res.data,
      status: res.status,
    }))
    .catch((err) => {
      let templeStatus = 404;
      if (err.response) {
        const {
          data,
          status,
          headers,
        } = err.response;
        console.error(data, '\n', status, '\n', headers);
        templeStatus = status;
      }
      if (err.request) {
        console.error(err.request);
      } else {
        console.error('Error', err.message);
      }
      console.error(err.config);
      return { status: templeStatus };
    });
}
