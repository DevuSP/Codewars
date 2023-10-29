
// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// Examples (Input --> Output)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false



solution 
function validatePIN (pin) {
  
    var pinlen = pin.length;
   var isCorrectLength = (pinlen == 4 || pinlen == 6);
   var hasOnlyNumbers = pin.match(/^\d+$/);
   if(isCorrectLength && hasOnlyNumbers){
     return true;
   }
   return false;
 }


 
 function validatePIN(pin) {
    return /^(\d{4}|\d{6})$/.test(pin)
  }

//   An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

// isIsogram "Dermatoglyphics" = true
// isIsogram "moose" = false
// isIsogram "aba" = false

solution 
function isIsogram(str){
  //...
  return !str.match(/([a-z]).*\1/i);
}


// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

// Examples
// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"
// don't worry about uppercase vowels
// y is not considered a vowel for this kata


function shortcut (string) {
  let arr = string.split("");
  arr.forEach((letter, index)=>{
    if(/[aeiou]/.test(letter)){
      arr.splice(index, 1,"");
    }
  })
  return arr.join("");
}

console.log(shortcut('how are you today?'))

// In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.

// The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...

// Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

// You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

// The string has a length greater or equal to one and contains only letters from ato z.

// Examples:
// s="aaabbbbhaijjjm"
// printer_error(s) => "0/14"

// s="aaaxbbbbyyhwawiwjjjwwm"
// printer_error(s) => "8/22"

function printerError(s) {
  let nume = 0
  s.split("").forEach((letter)=>{
   if((/[n-z]/).test(letter)){
     nume += 1;
   }
  })
  return String(nume) + "/" + String(s.length);
 }

console.log(printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"))