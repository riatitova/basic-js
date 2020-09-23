const chainMaker = {
  arr: [],

  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    if (value === undefined) {
      value = "";
    }
    if (this.arr.length == 0) {
      this.arr.push(`( ${value} )`);
    } else {
      this.arr.push(`~~( ${value} )`);
    }
    return this;
  },
  removeLink(position) {
    if (
      !isFinite(position) ||
      !Number.isInteger(position) ||
      this.arr[position - 1] === undefined
    ) {
      this.arr = [];
      throw new Error();
    }
    if (position == 1) {
      this.arr[1] = this.arr[1].slice(2);
      this.arr.shift();
    } else {
      this.arr.splice(position - 1, 1);
    }

    return this;
  },
  reverseChain() {
    if (this.arr.length == 0) {
      this.arr = [];
      return this;
    }
    this.arr[0] = "~~" + this.arr[0];
    this.arr = this.arr.reverse();
    this.arr[0] = this.arr[0].slice(2);
    return this;
  },
  finishChain() {
    let res = this.arr.join("");
    this.arr = [];
    return res;
  },
};

module.exports = chainMaker;
