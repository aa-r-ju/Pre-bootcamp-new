// YOUR CODE BELOW
function myReverse(array) {
  let newArray = [];
  let val = array.length - 1;
  for (let i = val; i >= 0; i--) {
    newArray.push(array[i]);
  }
  return newArray;
}
console.log(myReverse([1, 2, 3]));
