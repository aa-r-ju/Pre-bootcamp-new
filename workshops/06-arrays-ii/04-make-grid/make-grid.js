// YOUR CODE BELOW
function makeGrid(numColumns, numRows) {
  let array = [];
  for (let i = 0; i < numRows; i++) {
    let row = [];
    for (let j = 1; j <= numColumns; j++) {
      row.push(j);
    }
    array.push(row);
  }

  return array;
}
console.log(makeGrid(3, 4));
