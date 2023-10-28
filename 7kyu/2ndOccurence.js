// In this kata, you need to write a function that takes a string and a letter as input and then returns the index of the second occurrence of that letter in the string. If there is no such letter in the string, then the function should return -1. If the letter occurs only once in the string, then -1 should also be returned.

// Examples:

// secondSymbol('Hello world!!!','l')  --> 3
// secondSymbol('Hello world!!!', 'A') --> -1

solution

function secondSymbol(s, symbol) {
    if(s.includes(symbol)){
    let first = s.indexOf(symbol)
    let second = s.indexOf(symbol, first + 1) // will look after first occurecne
    return second;
    }
     else{return -1}
  }