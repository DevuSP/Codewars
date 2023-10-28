//Problem
// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

// Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)

// Note: The function accepts an integer and returns an integer.

solution1
function squareDigits(num){
    let num1 = num.toString();  // .toString =convert to string
    let arr = [];
    for (let i = 0; i < num1.length; i++){
     num = num1.slice(i, i + 1);         //.slice(start, end)
     num = Number(num) * Number(num);    // Number = change from string to number
     num = num.toString();               // back to string to push and add
     arr.push(num);
    }
     let digit = arr.join('')          // arr.join('') = joins without space or coma // (',') = joins with coma
     digit = Number(digit);
      return digit;
    }


solution2
function squareDigits(num){
    var string = num.toString();
    var results = [];
    for (var i = 0; i < string.length; i++){
        results[i] = string[i] * string[i];      
    }
    return Number(results.join(''));
};
