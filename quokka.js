// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

// Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

function order(words){
  if(words === ""){return ""};
  let string = []
  let wordsArr = words.split(" ");
  let wordsArr2 = words.split(" ");
  wordsArr.forEach((x)=>{
    let indexInWord = x.match(/[1-9]/i);
    console.log(indexInWord[0]);
    wordsArr2.splice(indexInWord[0] - 1, 1, x)
  })
  return wordsArr2.join(" ");
}

function order(words){
  
  return words.split(' ').sort(function(a, b){
    return a.match(/\d/) - b.match(/\d/);

   }).join(' ');
}  

console.log(order("4of Fo1r pe6ople g3ood th5e the2"));