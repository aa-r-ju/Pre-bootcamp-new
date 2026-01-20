// YOUR CODE BELOW
function myIndexOf(source, searchValue, startIdx = 0) {
  // loop through source starting from startIdx
  for (let i = startIdx; i <= source.length - searchValue.length; i++) {
    let found = true;

    // check character by character
    for (let j = 0; j < searchValue.length; j++) {
      if (source[i + j] !== searchValue[j]) {
        found = false;
        break;
      }
    }

    if (found) {
      return i;
    }
  }

  return -1;
}
