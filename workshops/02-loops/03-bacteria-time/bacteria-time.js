// YOUR CODE BELOW
function bacteriaTime(currentNum, targetNum) {
  if (targetNum < currentNum) {
    return "targetNum must be larger than currentNum";
  }
  let result = 0;
  for (let i = currentNum; i < targetNum; i *= 2) {
    result += 20;
  }
  return result;
}
console.log(bacteriaTime(1, 8));
console.log(bacteriaTime(3, 3));
