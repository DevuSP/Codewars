
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