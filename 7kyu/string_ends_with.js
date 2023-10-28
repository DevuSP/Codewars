// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

solution 1

function solution(str, ending){
    // TODO: complete
  
    if (ending.length === 1 && str.slice(-1) === ending.slice(-1) ||ending.length === 2 && str.slice(-2) === ending.slice(-2) ||
        ending.length === 3 && str.slice(-3) === ending.slice(-3) ||ending.length === 4 && str.slice(-4) === ending.slice(-4) ||
       ending.length === 0 ) {
         return true; 
      } else {
      return false;
    }
  }

  solution 2
  function solution(str, ending){
    return str.slice(0 - ending.length) === ending;
  }

  solution 3
  function solution(str, ending){
    return str.endsWith(ending);
  }


  // Problem 2
//You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// #Examples:

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"
// #Input

// A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

// #Output

// The middle character(s) of the word represented as a string.

solution

function getMiddle(s)
{
if(s.length % 2 === 0){
  return s.slice((s.length / 2) - 1, (s.length / 2) + 1);
 }
  else {
    return s.slice(((s.length + 1 )/ 2) - 1, ((s.length + 1) / 2));
  }
}