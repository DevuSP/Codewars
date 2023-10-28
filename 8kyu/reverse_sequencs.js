//Problem 1
// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]

solution

const reverseSeq = n => {
    let reverse = [];
    for (let i = n; i > 0; i--){
      reverse.push(i);
    }
    return reverse;
  };

//Problem 2
// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

solution
function solution(str){
  let arr = str.split("");// made string to array.
  arr = arr.reverse();  // reversed the position in array.
  return arr.join("");  // joined the array into a word.
}