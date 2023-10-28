// In the following 6 digit number:

// 283910
// 91 is the greatest sequence of 2 consecutive digits.

// In the following 10 digit number:

// 1234567890
// 67890 is the greatest sequence of 5 consecutive digits.

// Complete the solution so that it returns the greatest sequence of five consecutive digits found within the number given. The number will be passed in as a string of only digits. It should return a five digit integer. The number passed may be as large as 1000 digits.


// Solution 1
function solution(digits){
  let result = 0;
  for (let i = 0; i < digits.length; i++){
   let string = ''
   for (let i2 = i; i2 < i + 5; i2++)  {
     string += digits[i2]
}
    if (Number(string) > result) {
      result = Number(string);
    }
    }
  return result;
  
  }

  //Solution 2

  const solution = digits =>
  digits.split('').reduce((prev,_,index) => Math.max(prev, digits.slice(index, index + 5))  ,0)
// prev value will be 0 initially.

// Solution 3

function solution(digits){
  let answer = 0;
  
  for (let i=0; i<digits.length; i++){
    let number = digits.substr(i, 5);  //each loop iteration pulls the next 5 digits into a substring
    if(Number(number) > answer){       //convert to number and compare against answer
      answer = Number(number);
    }
  }
  return answer;
}