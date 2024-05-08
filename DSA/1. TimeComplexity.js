//   Time Complexity :- Time required to execute an algorithm.

// 1. O(1) is best, least time.
// 2. O(n) is good, constant increment.
// 3. O(n^2) is not good, exponential increase.

// 4 Operations.fixed operations(operations will not increase if input is increased). O(1);
const sunnyNumber = (arr) => { 
    for (let i = 0; i < arr.length; i++) {
        if (i === 3) return arr[i];
    }
}
console.time("sunnyNumber");
console.log(sunnyNumber([23, 43, 11, 4, 23, 3]));
console.timeEnd("sunnyNumber");

// 1 Operation => O(1) time complexity.
const funnyNumber = (arr) => { 
    return arr[3];
};
console.time("funnyNumber");
console.log(funnyNumber([23, 43, 11, 4, 23, 3]));
console.timeEnd("funnyNumber");

// 3 Operation  => O(1) time complexity.
const someMoreFunction = (n) => { 
    return (n * (n + 5) / 2);
}
console.time("someMoreFunction");
console.log(someMoreFunction(8));
console.timeEnd("someMoreFunction");

// 2n + 3  =>  O(n) time complexity. O(n) may have 2n, 3n, 4n, and O(1).
const goingUpDown = (n) => {  
    console.log("Going Up.");
    for (let i = 0; i < n; i++) {
        console.log(i);
    }
    console.log("At the End, Going Down.");
    for (let i = n; i > 0; i--) {
        console.log(i);
    }
    console.log("At the start.");
    return "O(n) time complexity."
}
console.log(goingUpDown(2));

// n * n => O(n^2) complexity.
const printBoth = (n) => {  
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            console.log(i, j);
        }
    }
    return "O(n^2) time complexity."
}
console.log(printBoth(2));