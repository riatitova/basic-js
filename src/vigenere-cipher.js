//const CustomError = require("../extensions/custom-error");
function isLetter(str) {
  return str.length === 1 && str.match(/[a-z]/i);
}

function countNumber(num1, num2) {
  let sum = num1 - 97 + (num2 - 97);
  if (sum >= 26) {
    sum = sum - 26;
  }
  return 97 + sum;
}

function countNumberDecrypt(num1, num2) {
  let sum = num1 - 97;
  let key = num2 - 97;
  let res;
  if (sum - key < 0) {
    res = sum + 26 - key + 97;
  } else {
    res = sum - key + 97;
  }
  return res;
}
class VigenereCipheringMachine {
  constructor(bool) {
    this.bool = bool;
  }

  encrypt(message, key) {
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here
    if (message === undefined || key === undefined) {
      throw new Error("wrong value");
    }
    message = message.toLowerCase();
    key = key.toLowerCase();
    let newkey = [];
    let answer = "";
    let j = 0;
    for (let i = 0; i < message.length; i++) {
      if (j == key.length) {
        j = 0;
      }
      if (isLetter(message.charAt(i))) {
        newkey.push(key[j]);
        j++;
      }
    }
    newkey = newkey.join("");
    j = 0;
    for (let i = 0; i < message.length; i++) {
      if (isLetter(message.charAt(i))) {
        answer += String.fromCharCode(
          countNumber(message.charCodeAt(i), newkey.charCodeAt(j))
        );
        j++;
      } else {
        answer += message.charAt(i);
      }
    }
    if (this.bool == false) {
      return answer.toUpperCase().split('').reverse().join('');
    } else {
      return answer.toUpperCase();
    }
  }

  decrypt(message, key) {
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
    message = message.toLowerCase();
    key = key.toLowerCase();
    let newkey = [];
    let answer = "";
    let j = 0;
    for (let i = 0; i < message.length; i++) {
      if (j == key.length) {
        j = 0;
      }
      if (isLetter(message.charAt(i))) {
        newkey.push(key[j]);
        j++;
      }
    }
    newkey = newkey.join("");
    j = 0;
    for (let i = 0; i < message.length; i++) {
      if (isLetter(message.charAt(i))) {
        answer += String.fromCharCode(
          countNumberDecrypt(message.charCodeAt(i), newkey.charCodeAt(j))
        );
        j++;
      } else {
        answer += message.charAt(i);
      }
    }
    if (this.bool == false) {
      return answer.toUpperCase().split('').reverse().join('');
    } else {
      return answer.toUpperCase();
    }
  }
}

module.exports = VigenereCipheringMachine;
