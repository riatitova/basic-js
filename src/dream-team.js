//const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }
  let newArr = [];
  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] == 'string') {
      newArr.push(members.slice(i, i + 1).toString().trim().toUpperCase());
    }
  }

  newArr.sort();
  let str = '';
  let tmp;
  for (let i = 0; i < newArr.length; i++) {
    tmp = newArr[i].toString().trim();
    str += tmp.charAt(0);
  }

  return str.toUpperCase();
};
