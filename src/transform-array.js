//const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  let discarded = false;
  if (!Array.isArray(arr)) {
    throw new Error();
  }
  let disn = "--discard-next";
  let disp = "--discard-prev";
  let doubn = "--double-next";
  let doubp = "--double-prev";
  let res = [];
  if (arr.length <= 1) {
    return [];
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == disn && arr[i + 1] !== undefined && discarded == false) {
      i++;
      discarded = true;
    } else if (arr[i] == doubn && arr[i + 1] !== undefined) {
      res.push(arr[i + 1]);
      discarded = false;
    } else if (arr[i] == disp && arr[i - 1] !== undefined && discarded == false) {
      res.pop();
      discarded = false;
    } else if (arr[i] == doubp && arr[i - 1] !== undefined && discarded == false) {
      res.push(res[res.length - 1]);
    } else {
      discarded = false;
      if (
        arr[i] != disn &&
        arr[i] != disp &&
        arr[i] != doubn &&
        arr[i] != doubp 
      ) {
        res.push(arr[i]);
      }
    }
  }
  return res;
};
