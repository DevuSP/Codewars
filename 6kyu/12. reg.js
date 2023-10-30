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