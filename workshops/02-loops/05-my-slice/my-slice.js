// YOUR CODE BELOW
function mySlice(originalString, startIdx = 0, endIdx) {
  let outPut = "";
  if (endIdx === undefined) {
    endIdx = originalString.length;
  }
  for (let i = startIdx; i < endIdx; i++) {
    outPut += originalString[i];
  }
  return outPut;
}
console.log(mySlice("slice and dice"));
console.log(mySlice("slice and dice", 2));
console.log(mySlice("slice and dice", 2, 5));
// let num = 10 - 4 = 6
