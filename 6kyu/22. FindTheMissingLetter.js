// Find the missing letter
// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.

// Example:

// ['a','b','c','d','f'] -> 'e'
// ['O','Q','R','S'] -> 'P'
// (Use the English alphabet with 26 letters!)

// Have fun coding it and please don't forget to vote and rank this kata! :-)

// I have also created other katas. Take a look if you enjoyed this kata!

function findMissingLetter(array)
{
  const lowerLetter = "abcdefghijklmnopqrstuvwxyz";
  const upperLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let firstLetter = array[0];
  if(lowerLetter.indexOf(array[0]) > -1){
    let firstLetterIndex = lowerLetter.indexOf(firstLetter);
    for(let i = 0; i < array.length; i++){
      if(lowerLetter[i+firstLetterIndex] !== array[i]){
        return lowerLetter[i+firstLetterIndex];
      }
    }
  } else {
    let firstLetterIndex = upperLetter.indexOf(firstLetter);
    for(let i = 0; i < array.length; i++){
      if(upperLetter[i+firstLetterIndex] !== array[i]){
        return upperLetter[i+firstLetterIndex];
      }
    }
  }
}

const res = findMissingLetter(['a','b','c','d','f']);
console.log(res);