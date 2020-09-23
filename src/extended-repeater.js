module.exports = function repeater(str, options) {
  str += "";
  let result = "";

  if (!options.repeatTimes) {
    options.repeatTimes = 1;
  }
  if (!options.hasOwnProperty("addition")) {
    options.addition = "";
  }
  options.addition += "";
  if (!options.additionRepeatTimes) {
    options.additionRepeatTimes = 1;
  }
  if (!options.hasOwnProperty("separator")) {
    options.separator = "+";
  }
  if (!options.hasOwnProperty("additionSeparator")) {
    options.additionSeparator = "|";
  }

  for (let i = 0; i < options.repeatTimes; i++) {
    result += str;
    for (let j = 0; j < options.additionRepeatTimes; j++) {
      result += options.addition;
      if (j != options.additionRepeatTimes - 1) {
        result += options.additionSeparator;
      }
    }
    if (i != options.repeatTimes - 1) {
      result += options.separator;
    }
  }

  return result;
};
