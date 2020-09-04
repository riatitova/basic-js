//const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
 // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  if (date === undefined || !date) {
    return 'Unable to determine the time of year!';
  }
  try {
    date.getTime();
  } catch(e) {
    throw new Error(e);
  }
  let mon = date.getMonth();
  
  let seasons = {
    0:  'winter',
    1: 'winter',
    2: 'spring',
    3: 'spring',
    4: 'spring',
    5: 'summer',
    6: 'summer',
    7: 'summer',
    8: 'autumn',
    9: 'autumn',
    10:'autumn',
    11:'winter',
  };

  return seasons[mon];  
};
