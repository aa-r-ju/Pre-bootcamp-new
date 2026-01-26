// YOUR CODE BELOW
function zooInventory(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    let name = array[i][0];
    let animalType = array[i][1][0];
    let age = array[i][1][1];

    let sentence = `${name} the ${animalType} is ${age}.`;
    newArray.push(sentence);
  }
  return newArray;
}

let myZoo = [
  ["King Kong", ["gorilla", 42]],
  ["Nemo", ["fish", 5]],
  ["Punxsutawney Phil", ["groundhog", 11]],
];

console.log(zooInventory(myZoo));
