// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']


function solution(str) {
    let arr = [];
    for (let i = 0; i < str.length; i++) {
        let pair = str.slice(i, i + 2);
        console.log(pair.length);
        if (pair.length === 2) {
            arr.push(pair);
        } else {
            arr.push(`${pair}_`);
        }
        i++
    }
    console.log(arr);
    return arr;
}

const res = solution("abc");
console.log(res);