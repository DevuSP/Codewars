// Find the index of given no. in the array.
// [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15] ==> index = 6
// Using optimized method.

const findIndex = (array, number) => {
    array = array.sort((a, b) => a - b, 0);
    let min = 0;
    let max = array.length - 1;
    while (min <= max) {
      let midIndex = Math.floor((min + max) / 2);
        console.log(midIndex);
        console.log(min)
        console.log(max);
        if (array[midIndex] < number) {
            min = midIndex + 1;
        } else if (array[midIndex] > number) {
            max = midIndex - 1;
        } else {
            return midIndex
        }
    }
    return -1
}

const result = findIndex([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 7);
console.log(result);