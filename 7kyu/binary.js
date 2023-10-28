// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

// The binary number returned should be a string.

// Examples:(Input1, Input2 --> Output (explanation)))

// 1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
// 5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)

solution
function addBinary(a,b) {
    let dec = a+b;
    if (dec >= 0){
      return dec.toString(2)
      }
    //   // Here you could represent the number in 2s compliment but this is not what 
    //        JS uses as its not sure how many bits are in your number range. 
        else {
          return (~dec).toString(2);
      }
  }

  function addBinary(a,b) {
    var c = a + b;
    var res = '';
    while (c >= 1) {
      var res = c % 2 + res;
      c = Math.floor(c / 2);
    }
    return res;
  }