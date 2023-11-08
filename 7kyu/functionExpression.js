// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// Good luck!

// If you like this Kata, please try:

function capitalize(s){
    const oddCapital = (s)=>{
      let string = s.split("");
      return string.map((element, index)=>{
       return index % 2 === 0 ? element.toUpperCase() : element;
      });
      };
    const evenCapital = (s)=>{
      let string = s.split("");
      return string.map((element, index)=>{
       return index % 2 === 1 ? element.toUpperCase() : element;
      })
    }
      return [oddCapital(s).join(""), evenCapital(s).join("")];
  };