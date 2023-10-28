// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )


function alphabetPosition(text) {
  let string = "";
  for (let i = 0; i < text.length; i++) {
      if (/[a-zA-Z]/.test(text.charAt(i))) {

          string += text.charAt(i);
      }
  }
  string = string.split("");
  for (let i = 0; i < string.length; i++) {
      string[i] = string[i].toLowerCase().charCodeAt() - 96
  }
  return string.join(" ");
}

console.log(alphabetPosition(";%1g9w8o"))