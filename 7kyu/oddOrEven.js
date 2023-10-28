// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).

// Examples:
// Input: [0]
// Output: "even"

// Input: [0, 1, 4]
// Output: "odd"

// Input: [0, -1, -5]
// Output: "even"

solution 
function oddOrEven(array) {
    array.push(0)
    let sum = (array.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
    )) 
     if(sum % 2 === 0 || sum === 0){
      return "even"
    }  
    else {
      return "odd"
    }
  }

  solution
  function oddOrEven(arr) {
    return arr.reduce((a,b)=>a+b,0) % 2 ? 'odd' : 'even';
  }