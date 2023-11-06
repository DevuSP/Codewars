// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.

solution
function sumTwoSmallestNumbers(numbers) {  

    let min1 = Math.min(...numbers) // to know the index of first min no.
     //min no.
     numbers.splice(numbers.indexOf(min1), 1) // splice it so new min no. can be chosen.
    let min2 = Math.min(...numbers)
    return min1 + min2
  }

//   In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

solution
function highAndLow(numbers){
  // ...
  let arr = numbers.split(" ");
  let newArr = [];
  for (let i = 0; i < arr.length; i++){
    newArr.push(Number(arr[i]))
  }
  let min = Math.min(...newArr);
  let max = Math.max(...newArr);
  return + max +" "+ min
}

// Write a function that returns both the minimum and maximum number of the given list/array.

function minMax(arr){
  return [Math.min(...arr),Math.max(...arr)]; 
}

console.log(minMax([1, 2, 3, 4, 5]));