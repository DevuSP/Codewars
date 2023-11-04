// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

solution
function solution(string) {
    let arr = string.split("")
      let reg = /[A-Z]/g
    for(let i = 0; i < arr.length; i++){
      if(reg.test(arr[i])){
        arr.splice(i, 0, " ")
      }
    }
    return arr.join("").toString()
  }

  // Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

// Rules for a smiling face:

// Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
// Every smiling face must have a smiling mouth that should be marked with either ) or D
// No additional characters are allowed except for those mentioned.

// Valid smiley face examples: :) :D ;-D :~)
// Invalid smiley faces: ;( :> :} :]

// Example
// countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
// countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
// countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;
// Note
// In case of an empty array return 0. You will not be tested with invalid input (input will always be an array). Order of the face (eyes, nose, mouth) elements will always be the same.

function countSmileys(arr) {
  let count = 0;
  let pattern = /^(:|;)(-|~)?(D|\)$)/
  arr.forEach((testSmile)=>{
      if(pattern.test(testSmile)){
        count += 1;
      }
    })
  return count;
}

console.log(countSmileys([':)',':(',':D',':O',':;']))




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