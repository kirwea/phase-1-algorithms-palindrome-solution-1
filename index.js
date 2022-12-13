function isPalindrome(word) {
  // Write your algorithm here
function reverseString(word) {
  // create an array from the input string
  const wordArray = word.split("");
  // reverse the array
  const reversedWordArray = wordArray.reverse();
  // create a string from the reversed array
  const reversedWord = reversedWordArray.join("");
  // return the reversed string
  return reversedWord;
}

function isPalindrome(word) {
  // reverse the input string
  const reversedWord = reverseString(word);
  // if the reversed string is the same as the input

  return word === reversedWord;
}
}
/* 
  Add your pseudocode here
  > If the input string is the same after I reverse it, I should return
> true
Here's how we can translate that into a pseudocode version of our algorithm:
```txt
reverse the input string
if the reversed string is the same as the input
  return true
else
  return false
```
*/

/*