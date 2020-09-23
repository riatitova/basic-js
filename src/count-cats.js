module.exports = function countCats(backyard) {
  let count = 0;
  for (let i = 0; i < backyard.length; i++) {
    for (let j of backyard[i]) {
      if (j == '^^') {
        count++;
      }
    }
  }
  return count;
};
