// YOUR CODE BELOW
function crazyCaps(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
    if (i % 2 === 0) {
      result += str[i].toLowerCase();
    } else {
      result += str[i].toUpperCase();
    }
  }
  return result;
}
console.log(crazyCaps("tej is amazing"));
