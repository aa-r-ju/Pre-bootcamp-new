// YOUR CODE BELOW
function onlyOne(para1, para2, para3) {
  let count = 0;
  if (para1) count++;
  if (para2) count++;
  if (para3) count++;

  return count === 1;
}
console.log(onlyOne(false, false, true));
console.log(onlyOne(0, 1, 2));
