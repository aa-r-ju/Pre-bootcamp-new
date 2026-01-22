// YOUR CODE BELOW
function isTruthy(para) {
  if (para) {
    return true;
  } else if (para === false) {
    return `The boolean value ${para} is falsey`;
  } else if (para === null) {
    return `The ${para} value is falsey`;
  } else if (para === undefined) {
    return `${para} is falsey`;
  } else if (para === 0) {
    return `The number ${para} is falsey (the only falsey number)`;
  } else if (para === "") {
    return `The empty string is falsey (the only falsey string)`;
  }
}
console.log(isTruthy("I yearn for truth"));
console.log(isTruthy(null));
console.log(isTruthy(false));
console.log(isTruthy(undefined));
console.log(isTruthy(0));
console.log(isTruthy(""));
