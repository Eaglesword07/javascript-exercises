const convertToCelsius = function (arg) {

  // formula to convert fahrenheit to celcius
  // subtract 32 form arg and multiply by (5/9)
  const subtract = arg - 32;
  const multiplyBy = subtract * (5/9);
  // Round the result up to 1 decimal using the round method
  const answer = Math.round(multiplyBy * 10) / 10;
  return answer;
};

const convertToFahrenheit = function (arg) {

  // Formula to convert celcius to fahrenheit
  // multiply arg by (9/5) and add 32
  const multiplyBy = arg * (9/5);
  const add = multiplyBy + 32;
  // Round the result up to 1 decimal
  const answer = Math.round(add * 10) / 10;
  return answer;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
