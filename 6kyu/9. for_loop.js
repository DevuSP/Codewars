// You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

// Examples:
// strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2

// Concatenate the consecutive strings of strarr by 2, we get:

// treefoling   (length 10)  concatenation of strarr[0] and strarr[1]
// folingtrashy ("      12)  concatenation of strarr[1] and strarr[2]
// trashyblue   ("      10)  concatenation of strarr[2] and strarr[3]
// blueabcdef   ("      10)  concatenation of strarr[3] and strarr[4]
// abcdefuvwxyz ("      12)  concatenation of strarr[4] and strarr[5]

// Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".
// The first that came is "folingtrashy" so 
// longest_consec(strarr, 2) should return "folingtrashy".

// In the same way:
// longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"
// n being the length of the string array, if n = 0 or k > n or k <= 0 return "" (return Nothing in Elm, "nothing" in Erlang).

// Note
// consecutive strings : follow one after another without an interruption

solution 
function longestConsec(strarr, k) {
    var longest = "";
    for(var i=0;k>0 && i<=strarr.length-k;i++){
        var tempArray = strarr.slice(i,i+k);
        var tempStr = tempArray.join("");
        if(tempStr.length > longest.length){
            longest = tempStr;
        }
    }
    return longest;
}

function longestConsec(strarr, k) {
    let maxString = "";
     for (let i = 0; i < strarr.length; i++) {
       if (k > strarr.length || k < 1) return maxString;
       let tempStr = strarr.slice(i, k + i).join("");
       if (tempStr.length > maxString.length) {
         maxString = tempStr;
       }
     }
     return maxString;
   }


   // Given an array a of integers, construct an array b of the same length as a such that


// b[0] = a[0] + a[1] + ... + a[n - 2] + a[n - 1]
// b[1] =        a[1] + ... + a[n - 2] + a[n - 1]
// ...
// b[n - 2] =                 a[n - 2] + a[n - 1]
// b[n - 1] =                            a[n - 1]
// where n is the length of a.

// Input/Output
// [input] integer array a

// 3 ≤ a.length ≤ 10^4,

// -1000 ≤ a[i] ≤ 1000.

// [output] an integer array

// Example
// For a = [1, 2, 3], the output should be [6, 5, 3].

// b[0]= 1 + 2 + 3 = 6
// b[1]=     2 + 3 = 5
// b[2]=         3 = 3
// For a = [1, 2, 3, -6], the output should be [0, -1, -3, -6].

// b[0]= 1 + 2 + 3 - 6 = 0
// b[1]=     2 + 3 - 6 = -1
// b[2]=         3 - 6 = -3
// b[3]=           - 6 = -6

function suffixSums(a) {
  //coding and coding..
  let b = [];
  for(let i = 0; i < a.length; i++){
    let currentValue = 0;
    console.log(a[i]);
    for(let j = i; j < a.length; j++){
      currentValue += a[j];
      console.log(currentValue)
    }
    b.push(currentValue);
  }
  return b;
}
console.log(suffixSums([1, 2, 3, -6]));