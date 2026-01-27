// YOUR CODE BELOW
function removeColumns(originalGrid, numColumns) {
  let newGrid = [];

  for (let i = 0; i < originalGrid.length; i++) {
    let row = [];

    // number of columns to keep
    let columnsToKeep = originalGrid[i].length - numColumns;

    for (let j = 0; j < columnsToKeep; j++) {
      row.push(originalGrid[i][j]);
    }

    newGrid.push(row);
  }

  return newGrid;
}

console.log(
  removeColumns(
    [
      [1, 2, 3],
      [1, 2, 3],
      [1, 2, 3],
      [1, 2, 3],
    ],
    2,
  ),
);
