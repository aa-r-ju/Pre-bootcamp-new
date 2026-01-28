// YOUR CODE BELOW
function mySlice(originalArray, startIdx, endIdx) {
  let result = [];
  let length = originalArray.length;

  // handle undefined startIdx
  if (startIdx === undefined) {
    startIdx = 0;
  }

  // handle undefined endIdx
  if (endIdx === undefined) {
    endIdx = length;
  }

  // handle negative startIdx
  if (startIdx < 0) {
    startIdx = length + startIdx;
    if (startIdx < 0) startIdx = 0;
  }

  // handle negative endIdx
  if (endIdx < 0) {
    endIdx = length + endIdx;
    if (endIdx < 0) endIdx = 0;
  }

  // main loop
  for (let i = startIdx; i < endIdx && i < length; i++) {
    result.push(originalArray[i]);
  }

  return result;
}

console.log(mySlice([1, 2, 3], 1, 2));
console.log(mySlice([1, 2, 3], 1));
console.log(mySlice([1, 2, 3]));
console.log(mySlice([1, 2, 3], -1));
console.log(mySlice([1, 2, 3], -2));
console.log(mySlice([1, 2, 3], 0, -1));
