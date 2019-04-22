import { START, FAIL, SUCCESS } from '../constants';

// async function fetchAsync(url, type, next, ...rest) {
//   const res = await fetch(url);
//   const parsedRes = await res.json();
//   next({ ...rest, type: type + SUCCESS, payload: parsedRes });
// }

export default () => next => (action) => {
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

  fetch(callApi)
    .then(res => res.json())
    .then(res => next({ ...rest, type: type + SUCCESS, payload: res }))
    .catch((error) => {
      next({ ...rest, type: type + FAIL, error });
    });
};
