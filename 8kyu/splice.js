// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.

// Example
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6
// Input validation
// If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.

solution
function sumArray(array) {
    if(array == null || array.length < 3){
      return 0
    }
  let max = array.indexOf((Math.max(...array)));
  let min = array.indexOf((Math.min(...array)));
    array.splice(max, 1, 0);
    array.splice(min, 1, 0);
    return array.reduce((a,b)=>{return a+b},0)
  }