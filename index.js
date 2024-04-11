function isPalindrome(word) {
  // Write your algorithm here
  // Convert the word to lowercase to handle case-insensitive comparisons
  word = word.toLowerCase();

  // Iterate from the beginning to the middle of the word
  for (let i = 0; i < Math.floor(word.length / 2); i++) {
      // Check each letter to the corresponding letter from the end
      const j = word.length - 1 - i;

      // If any letters don't match, return false
      if (word[i] !== word[j]) {
          return false;
      }
  }

/* 
  Add your pseudocode here
*/
  // Return true if all letters match until reaching the middle
  return true;
}

// Pseudocode:
/*
  Add written explanation of your solution here
Function isPalindrome(word):
  Convert word to lowercase
  For i from 0 to floor(length of word divided by 2):
    Set j as length of word minus 1 minus i
    If word[i] is not equal to word[j]:
      Return false
  End loop
  Return true
*/

// You can run `node index.js` to view these console logs
// Custom tests
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));
}

module.exports = isPalindrome;