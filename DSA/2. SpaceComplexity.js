//  Space Complexity :- the total amount of memory space used by an algorithm, including the space of input values for execution.
// 1. Constant space complexity => Boolean, num, null, undefined :- space memory stays constant as length is predefined.
// 2. Dynamic space complexity => Array, string, object :- space memory changes with length.


// O(1) :- length of input > length of output.
const funnyNumber = (arr) => {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum;
}
console.time("funnyNumber");
console.log(funnyNumber([23, 43, 11, 4, 23, 3]));
console.timeEnd("funnyNumber");

// O(n) :- length of input = length of output.
const sunnyNumber = (num) => {
    let arr = [];

    for (let i = 0; i < num; i++) {
        arr.push(i * 72);
    }

    return arr;
}
console.time("sunnyNumber");
console.log(sunnyNumber(5));
console.timeEnd("sunnyNumber");

// O(n^2) :- (input)^2 = output.length
const createMatrix = (n) => {
    let matrix = [];
    for (let i = 0; i < n; i++) {
        matrix[i] = [];
        for (let j = 0; j < n; j++) {
            matrix[i][j] = 1 + j;
        }
    }
    return matrix;
}

console.log(createMatrix(5));