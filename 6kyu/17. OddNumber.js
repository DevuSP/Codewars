// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

// solution 

function findOdd(A) {
    let oddNumber = 0;
    for (let i = 0; i < A.length; i++) {
      let count = A.filter((number)=>{return number === A[i]});
      if (count.length % 2 === 1) {
        oddNumber += A[i];
        break;
      }
    }
    return oddNumber
  }

  const findOdd = (xs) => xs.reduce((a, b) => a ^ b);
  // XOR === ^ cuts the value that repeats itself.

  console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]));