// Task:
// Your task is to write a function which returns the sum of following series upto nth term(parameter).

// Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
// Rules:
// You need to round the answer to 2 decimal places and return it as String.

// If the given value is 0 then it should return 0.00

// You will only be given Natural Numbers as arguments.

// Examples:(Input --> Output)
// 1 --> 1 --> "1.00"
// 2 --> 1 + 1/4 --> "1.25"
// 5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"

function SeriesSum(n)
{
  if(n === 1){return "1.00"}
  if(n === 0){return "0.00"}
  let add = 1.005;
  let number = 1;
  for(let i = 1; i < n; i++){
      number += 3;
      add += 1/number;
  }
  return (String(add).slice(0,String(add).indexOf(".")+3));
}

const res = SeriesSum(57);
console.log(res); // 1.57