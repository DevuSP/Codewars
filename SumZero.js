// Checking the sum zero
// [-5, -4, -3, -2, 0, 2, 4, 6, 8] -> input
// [-4, 4]
function sumZero(arr) {

    // Comlexity o(n^2); quadratic time complexity.
    // const arrLength = arr.length;
    // console.log(arrLength);
    // for(let i = 0; i < arrLength; i++){
    //     for(let j = i+1; j < arrLength; j++){
    //         if( arr[i]+ arr[j] === 0){
    //           return [arr[i], arr[j]];
    //         }
    //     }
    // }
    // return "None";


    // Comlexity o(n); linear time complexity.
    const ascendingArr = arr.sort((a, b) => { return a - b }, 0);
    let start = 0;
    let end = ascendingArr.length - 1;
    while (start < end) {
        let sum = ascendingArr[start] + ascendingArr[end];
        if (sum === 0) {
            return [ascendingArr[start], ascendingArr[end]];
        } else if (sum < 0) {
            start++;
        } else if (sum > 0) {
            end--;
        };
    };
};

console.log(sumZero([-5, -3, -5, -4, 0, 6, -1, 6, 1]));