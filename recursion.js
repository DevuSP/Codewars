// Recursion => when function calls itself.
// should have end point or it will keep calling itself.
//

// let counter = 1;
// const recursion = (number) => {
//     if (counter > number) {
//         return;
//     }
//     console.log("Recursion logging... " + counter);
//     counter++;
//     recursion(number);
// }
// recursion(10);


// sorting using Recursion Function.
// sort => [2,3,1,4]
const checkSort = (array) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] > array[i + 1]) {
            return false;
        }
    }
    return true;
}

let i = 0;
let j = 1;
let sortedArray;
const sorting = (array) => {
    if (checkSort(array)) {
        console.log("Sorted: true");
        sortedArray = array;
    } else if (array[i] <= array[j]) {
        console.log("Sorted: false");
        i++;
        j++;
        sorting(array);
    } else {
        [array[i], array[j]] = [array[j], array[i]];
        console.log("Sorted: false");
        i = 0;
        j = 1;
        sorting(array);
    }
    return sortedArray;

}
const result = sorting([2, 3, 3, 1, 4, 5]);
console.log(result);
