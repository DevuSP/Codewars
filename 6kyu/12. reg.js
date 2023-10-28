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