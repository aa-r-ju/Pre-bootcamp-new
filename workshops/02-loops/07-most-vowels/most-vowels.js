// YOUR CODE BELOW
function mostVowels(sentence) {
  let maxVowels = 0;
  let result = "";

  let currentWord = "";
  let currentCount = 0;

  for (let i = 0; i < sentence.length; i++) {
    let ch = sentence[i].toLowerCase();

    if (ch !== " ") {
      currentWord += sentence[i];

      if (ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u") {
        currentCount++;
      }
    } else {
      if (currentCount > maxVowels) {
        maxVowels = currentCount;
        result = currentWord;
      }
      currentWord = "";
      currentCount = 0;
    }
  }

  if (currentCount > maxVowels) {
    result = currentWord;
  }

  return result;
}
console.log(mostVowels("I am a keeper with some real rhythms"));
console.log(mostVowels("try my gym"));
