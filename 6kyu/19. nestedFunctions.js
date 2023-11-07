// The input is a string str of digits. Cut the string into chunks (a chunk here is a substring of the initial string) of size sz (ignore the last chunk if its size is less than sz).

// If a chunk represents an integer such as the sum of the cubes of its digits is divisible by 2, reverse that chunk; otherwise rotate it to the left by one position. Put together these modified chunks and return the result as a string.

// If

// sz is <= 0 or if str is empty return ""
// sz is greater (>) than the length of str it is impossible to take a chunk of size sz hence return "".
// Examples:
// revrot("123456987654", 6) --> "234561876549"
// revrot("123456987653", 6) --> "234561356789"
// revrot("66443875", 4) --> "44668753"
// revrot("66443875", 8) --> "64438756"
// revrot("664438769", 8) --> "67834466"
// revrot("123456779", 8) --> "23456771"
// revrot("", 8) --> ""
// revrot("123456779", 0) --> "" 
// revrot("563000655734469485", 4) --> "0365065073456944"
// Example of a string rotated to the left by one position:
// s = "123456" gives "234561".


function revrot(str, sz) {
    if (sz <= 0 || str === "" || str.length < sz) { return "" };
  
    let revvedOrRotated = "";
    
    for (let i = 0; i < str.length / sz; i++) {
      let currentIndex = sz * (i);
      let chunk = str.slice(currentIndex, currentIndex + sz);
      if (chunk.length < sz) { break; };
      console.log(chunk);
      revvedOrRotated += checkReverseOrRotate(chunk);
    }
    function checkReverseOrRotate(chunk) {
      let sumOfCube = chunk.split("").map(element=>{
        return Math.pow(Number(element), 3);
      })
      sumOfCube = sumOfCube.reduce((a,b) =>{return a+b})
      console.log(sumOfCube);
      if (sumOfCube % 2 === 0) {
        return reverseChunk(chunk);
      } else {
        return rotateChunk(chunk);
      }
    }
  
    function reverseChunk(chunk) {
      let reverse = String(chunk).split("").reverse().join("");
      return reverse;
    }
    
    function rotateChunk(chunk) {
      let array = String(chunk).split("")
      let firstChar = array.splice(0, 1);
      array.push(firstChar);
      return array.join("");
    }
  
    return revvedOrRotated;
  }
  
  console.log(revrot("664438769", 8))