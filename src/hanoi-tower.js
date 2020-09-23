module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let turns = Math.pow(2, disksNumber) - 1;
  let sec = (turns / turnsSpeed) * 3600;
  let obj = {};
  obj.turns = turns;
  obj.seconds = Math.floor(sec);
  return obj;
};
