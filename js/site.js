// function for running
function reverseTheString(str) {
  // Reverse our string
  return str.split("").reverse().join("");
}

function clearword(){
  document.getElementById("word").value = "";
  document.getElementById("mirror").placeholder = "Mirror";
  document.getElementById("mirror").value = "";
  document.getElementById("result").placeholder = "Result";
}
// Let the user know whether it's a palindrome

function checkForPalindrome() {
  // Get whatever the user typed
  let input = document.getElementById("word").value;

  // regularExpression =
  // / ... /g It's a global regex. So it'll operate on multiple matches in the string.
  // [ ... ] This creates a character set. Basically it'll match any single character within the listed set of characters.
  // \W_ This matches the inverse of "word characters" and underscores. Any non-word character.

  let regularExpression = /[\W_]/g;

  // Make it lower case
  let lowRegStr = input.toLowerCase().replace(regularExpression, "");

  // Set reverseString to the evaluation of invoking reverseTheString(lowRegStr)
  let reverseString = reverseTheString(lowRegStr);

  // If the reverse string is the same as our cleaned input string,
  // set the inner text of result to 'Yes, it is'
  // If nothing in the input, the rerult will be 'You entered nothing, Please type something!'
  if (reverseString.length == 0 || lowRegStr.length == 0){
    document.getElementById("result").placeholder = "You entered nothing OR special characters, Please type something else!";
  } else {
    if (reverseString === lowRegStr) {
      document.getElementById("result").placeholder = "Yes, it is.";
      // Otherwise, set the inner text of result to 'No, it isn't.
    } else {
      document.getElementById("result").placeholder = "No, it isn't.";
    }
  
    document.getElementById("mirror").placeholder = "Your previous result below, check a different word!";
    reversedString = [];
    document.getElementById("word").reset();
  }
  }

// Mirror what we type

let reversedString = []; // Have somewhere to store keypresses

// Get the input box and add an event listener
document.getElementById("word").addEventListener("keydown", (event) => {
  if (
    event.key !== "Backspace" &&
    event.key !== "Enter" &&
    event.key !== "Tab" &&
    event.key !== "Shift" &&
    !event.altKey &&
    !event.ctrlKey
  ) {
    // Last in first out
    reversedString.unshift(event.key);
    
  }
  if (event.key == "Backspace") {
    // Remove first element of the array if we hit backspace
    reversedString.shift();
  }

  // Add an if to check the input - if it's empty, reset reversed string.

  if (reversedString.length < 1) {
    // If there's nothing in the input box replace the placeholder
    document.getElementById("mirror").placeholder = "Mirror";
    reversedString = [];
  } else {
    // Otherwise, spit out whatever is in the array
    document.getElementById("mirror").placeholder = reversedString.join("");
  }
  // REFACTOR THIS SO THAT WE GET OUR MIRROR FROM OUR INPUT BOX AND NOT THE KEYS
  document.getElementById("clearword").addEventListener("click", (event) => {
    reversedString = []
  })
  
});
