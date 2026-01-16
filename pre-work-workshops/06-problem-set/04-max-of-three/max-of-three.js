// YOUR CODE BELOW
function maxOfThree(...num) {
  let max = num[0];
  for (let i = 0; i < num.length; i++) {
    if (max < num[i]) {
      max = num[i];
    }
  }
  return max;
}
console.log(maxOfThree(5, 4, 10));
console.log(maxOfThree(7, 7, 4));
