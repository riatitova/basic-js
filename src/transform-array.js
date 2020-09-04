//const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
 // throw new CustomError('Not implemented');
  // remove line with error and write your code here
 if (!Array.isArray(arr)) {
  throw new Error();
 }
 let disn = '--discard-next';
 let disp = '--discard-prev';
 let doubn = '--double-next';
 let doubp = '--double-prev';
 let res = [];
 if (arr.length <= 1) {
   return [];
 }
 for (let i = 0; i < arr.length; i++) {
  if (Number.isInteger(arr[i])) {
    res.push(arr[i]);
  }
  if (arr[i] == disn && arr[i+1] !== undefined) {
    arr.splice(i + 1, 1);
  }
  if (arr[i] == doubn && arr[i+1] !== undefined) {
    arr[i + 1] *= 2;
  }
  if (arr[i] == disp && arr[i-1] !== undefined) {
    res.splice(i - 1, 1);
  }
  if (arr[i] == doubp && arr[i-1] !== undefined) {
    res[i - 1] *= 2;
  }
 }
 return res;
};
