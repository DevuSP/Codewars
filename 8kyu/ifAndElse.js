// // Problem 1
// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]

solution 
function countSheeps(arrayOfSheep) {
    let numberOfSheep = 0;
    for(let i = 0; i < arrayOfSheep.length; i++){
      let attendance = arrayOfSheep[i];
    if(attendance === true){
      numberOfSheep++;
    }
      }
    return numberOfSheep
  }


//   Create a function with two arguments that will return an array of the first n multiples of x.

// Assume both the given number and the number of times to count will be positive numbers greater than 0.

// Return the results as an array or list ( depending on language ).

// Examples
// countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
// countBy(2,5) === [2,4,6,8,10]


solution
function countBy(x, n) {
  let z = [];
  z.push(x);
  for (let i = 0; i < n -1; i++){
    z.push(x + z [i]);
  }
  return z;
}

function countBy(x, n) {
  var z = [];
  for (i = 1; i <= n; i++) {
      z.push(x * i);
  }
  return z;
}