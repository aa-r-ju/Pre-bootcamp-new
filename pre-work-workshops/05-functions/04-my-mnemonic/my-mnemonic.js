// YOUR CODE BELOW
function myMnemonic(...str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i]) {
      result += str[i][0];
    }
  }

  return result;
}
console.log(myMnemonic("Must", "Accept", "Sugar", "Happiness"));
console.log(myMnemonic("We", "Eat", "Eggs"));
