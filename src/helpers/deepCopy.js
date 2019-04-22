export default function deepCopy(obj) {
  const clone = {};
  Object.entries(obj).forEach((innerObj) => {
    const key = innerObj[0];
    const val = innerObj[1];
    if (typeof (val) === 'object') {
      clone[key] = deepCopy(val);
    } else {
      clone[key] = val;
    }
  });
  return clone;
}
