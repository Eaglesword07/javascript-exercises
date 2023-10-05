const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arg) {
  let sum = 0;
  for (let i = 0; i < arg.length; i++) {
    sum += arg[i];
  }
  return sum;
};

const multiply = function (arg) {
  let product = 1;
  for (let i = 0; i < arg.length; i++) {
    product *= arg[i];
  }
  return product;
};

const power = function (a, b) {
  let result = 1;
  for (let i = 0; i < b; i++) {
    result *= a;
  }
  return result;
};

const factorial = function (num) {
  if (num === 0) {
    return 1;
  } else {
    let arr = [];
    let result = 1;
    for (let i = 1; i <= num; i++) {
      result *= arr.push(i);
    }
    return result;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
