// Write a function that takes in a string of one or more words, and returns the same string, but with all words that have five or more letters reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples:

// "Hey fellow warriors"  --> "Hey wollef sroirraw" 
// "This is a test        --> "This is a test" 
// "This is another test" --> "This is rehtona test"

function spinWords(string) {
    let finalArr = [];
    let arr = string.split(" ");
    const reverse = (word) => {
        let reversedWord = "";
        for (let i = word.length; i > 0; i--) {
            reversedWord += word.slice(i - 1, i)
        }
        return reversedWord;
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length >= 5) {
            finalArr.push(reverse(arr[i]))
        } else { finalArr.push(arr[i]) };
    }
    return finalArr.join(" ");
}

// console.log(spinWords("Hey fellow warriors"));
console.log(spinWords("Just kidding there is still one more"));

function spinWords(words){
    return words.split(' ').map(function (word) {
      return (word.length > 4) ? word.split('').reverse().join('') : word;
    }).join(' ');
  }