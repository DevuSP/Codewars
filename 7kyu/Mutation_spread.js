// "Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

// Don't change the order of the elements that are left.

// Examples
// * Input: [1,2,3,4,5], output = [2,3,4,5]
// * Input: [5,3,2,1,4], output = [5,3,2,4]
// * Input: [2,2,1,2,1], output = [2,2,2,1]"

function removeSmallest(numbers) {
    // [...numbers] this is spread operator used to make a copy of array.
    //this basically iterate all element inside the array. 
    let number = [...numbers]
    let lowRating = Math.min(...number);
    let index = numbers.indexOf(lowRating);
    number.splice(index, 1);
    return number;
}
removeSmallest([196, 80, 333, 308, 333, 182, 165, 29, 16])
removeSmallest([1, 2, 3, 4, 5])