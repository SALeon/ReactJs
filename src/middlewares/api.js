import {
  START, FAIL, SUCCESS, NOT_FOUND,
} from '../constants';
import movieParamsParser from '../helpers/movieParamsParser';


// async function fetchAsync(url, type, next, ...rest) {
//   const res = await fetch(url);
//   const parsedRes = await res.json();
//   next({ ...rest, type: type + SUCCESS, payload: parsedRes });
// }

export default ({ getState }) => next => (action) => {
  const { callApi, type, ...rest } = action;
  if (!callApi) {
    return next(action);
  }

  next({ ...rest, type: type + START });

  // try {
  //   fetchAsync(callApi, type, next, ...rest);
  // } catch (err) {
  //   console.log(err);
  //   next({ ...rest, type: type + FAIL, err });
  // }
  const request = callApi + movieParamsParser(getState());
  fetch(request)
    .then(res => res.json())
    .then((res) => {
      if (!res.data.length) {
        return next({ ...rest, type: type + NOT_FOUND, payload: res });
      } return next({ ...rest, type: type + SUCCESS, payload: res });
    })
    .catch((error) => {
      next({ ...rest, type: type + FAIL, error });
    });
};
