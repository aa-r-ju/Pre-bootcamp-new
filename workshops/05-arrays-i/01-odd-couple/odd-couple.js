// YOUR CODE BELOW
function oddCouple(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      newArray.push(array[i]);
      if (newArray.length === 2) {
        return newArray;
      }
    }
  }
  return newArray;
}
console.log(oddCouple([1, 2, 3, 4, 5]));
console.log(oddCouple(2, 4, 6, 8));
console.log(oddCouple([10, 15, 20]));
console.log(oddCouple([2, 4, 6, 8]));
