// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

solution 

function reverseWords(str) {
    // Go for it
    let arr = str.split("");
    let firstArr = arr.reverse();
    let secondArr = firstArr.join("");
    let thirdArr = secondArr.split(" ");
    let fourthArr = thirdArr.reverse();
    return  fourthArr.join(" ");
  }