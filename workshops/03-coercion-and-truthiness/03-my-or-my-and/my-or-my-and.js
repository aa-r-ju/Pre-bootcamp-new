// YOUR CODE BELOW
function myOr(val1, val2, val3) {
  let arr = [...arguments];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      return arr[i];
    }
  }
  return arr[arr.length - 1];
}
console.log(myOr(true, false, 0));

function myAnd(para1, para2, para3) {
  if (!para1) return para1;
  if (!para2) return para2;

  return para3;
}
console.log(myAnd(undefined, 10, undefined));
console.log(myAnd(1, "apples", true));
