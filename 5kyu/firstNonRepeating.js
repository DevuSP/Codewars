// Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.

// For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

// As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

// If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.

function firstNonRepeatingLetter(s) {
    // Add your code here
    if (s.length < 2) {
        return s;
    }
    const simpleArr = s.split("");
    const arr = s.toLowerCase().split("");
    let map = {};
    for (let letters of arr) {
        map[letters] = (map[letters] || 0) + 1;
    }
    for (let value in map) {
        console.log(value);
        if (map[value] === 1) {
            if (simpleArr.indexOf(value) < 0) {
                return value.toUpperCase();
            } else {
                return value
            }

        };
    }
    return "";
}

const res = firstNonRepeatingLetter('mosoSnmEn');
console.log(res);