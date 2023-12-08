// [1, 2, 3, 4, 3, 5, 4, 6, 7, 8].
// Count largest sum of four cosecutive numbers.

const largestSum = (array, num) => {
    if (array.length < 4 || num > array.length) {
        throw new Error("Invalid task");
    }
    let largestSum = 0;
    for (let i = 0; i < array.length - 3; i++) {
        let sum = 0;
        for (let j = 0; j < num; j++) {
            sum += array[i + j];
        }
        if (sum > largestSum) {
            largestSum = sum;
        }
    }
    return largestSum;
}

const result = largestSum([1, 2, 3, 4, 3, 5, 4, 6, 7, 8], 4);
console.log("Result: " + result);