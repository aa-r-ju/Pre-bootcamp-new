// YOUR CODE BELOW
function zeroDarkThirty(num) {
  if (num === 0) {
    return NaN;
  }
  let str = String(num);
  let strValue = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== "0") {
      strValue += str[i];
    }
  }
  return Number(strValue);
}
console.log(zeroDarkThirty(102302));
console.log(zeroDarkThirty(606.203));
