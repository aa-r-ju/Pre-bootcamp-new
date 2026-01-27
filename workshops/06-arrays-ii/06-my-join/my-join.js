// YOUR CODE BELOW
function myJoin(array, separator) {
  // default separator
  if (separator === undefined) {
    separator = ",";
  }

  let result = "";

  for (let i = 0; i < array.length; i++) {
    let value = array[i];

    // replace undefined or null with empty string
    if (value === undefined || value === null) {
      value = "";
    }

    result += value;

    // add separator except after the last element
    if (i < array.length - 1) {
      result += separator;
    }
  }

  return result;
}

console.log(myJoin(["let's", "make", "a", "list"], " "));
console.log(myJoin(["a", "b", "c"], "+"));
console.log(myJoin(["Peter", "Paul", "Mary"]));
console.log(myJoin(["hello", undefined, "world"], "-"));
