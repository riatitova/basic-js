module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if (arr.length == 0) return 1;
    let depth = 1;
    if (arr instanceof Array) {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] instanceof Array) {
          depth = 1 + this.calculateDepth(arr.flat());
          break;
        }
      }
    }
    return depth;
  }
};
