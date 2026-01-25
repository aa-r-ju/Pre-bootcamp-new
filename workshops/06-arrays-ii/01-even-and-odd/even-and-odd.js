// YOUR CODE BELOW
function evenAndOdd(array) {
  let bigContainer = [];
  let oddArray = [];
  let evenArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      evenArray.push(array[i]);
    } else {
      oddArray.push(array[i]);
    }
  }
  bigContainer.push(evenArray, oddArray);
  return bigContainer;
}
console.log(evenAndOdd([1, 2, 3, 4, 5, 6]));
