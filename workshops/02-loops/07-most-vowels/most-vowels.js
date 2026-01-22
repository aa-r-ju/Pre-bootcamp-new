// YOUR CODE BELOW
function mostVowels(sentence) {
  let maxVowels = 0;
  let result = "";

  let currentWord = "";
  let currentCount = 0;

  for (let i = 0; i < sentence.length; i++) {
    let ch = sentence[i];
    let lowerCh = ch.toLowerCase();

    // Check if the character is a letter
    if (lowerCh >= "a" && lowerCh <= "z") {
      currentWord += ch;

      // Check if the letter is a vowel
      if (
        lowerCh === "a" ||
        lowerCh === "e" ||
        lowerCh === "i" ||
        lowerCh === "o" ||
        lowerCh === "u"
      ) {
        currentCount++;
      }
    } else if (ch === " ") {
      // end of word
      if (currentCount > maxVowels) {
        maxVowels = currentCount;
        result = currentWord;
      }
      currentWord = "";
      currentCount = 0;
    }
  }

  // Check the last word (in case sentence does not end with a space)
  if (currentCount > maxVowels) {
    result = currentWord;
  }

  return result;
}

// Test cases
console.log(mostVowels("I am a keeper with some real rhythms")); // keeper
console.log(mostVowels("try my gym")); // try
console.log(mostVowels("Peeves.")); // Peeves
