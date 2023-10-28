// Problem 1
// We need a function that can transform a number (integer) into a string.

// What ways of achieving this do you know?

// Examples (input --> output):
// 123  --> "123"
// 999  --> "999"
// -100 --> "-100"


solution 
function numberToString(num) {
    // Return a string of the number here!
    let String = num;
    String = toString.toString();  // toString is a code.
    return String;
  }

  // Problem 2
  // It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

  solution
  function removeChar(str){
    return str.slice(1, -1);
   };
   
   // Problem 3
  //  Write function RemoveExclamationMarks which removes all exclamation marks from a given string. 

  solution
  function removeExclamationMarks(s) {
    let arr = s.split("");
     let newArr = [];
     arr.map((x=>{
       if(x !== "!"){
         newArr.push(x)
       }
     }))
     return newArr.join("").toString();
   }


   solution
   function removeExclamationMarks(s) {
     return s.replace(/!/ig, '');
    }
    
    solution
    function removeExclamationMarks(s) {
      var arr =s.split("");
      arr = arr.filter(function(e){
            return e !== "!";
        })
        return arr.join("");
    }
   
