// Count Unique Numbers Length;
// [1, 1, 2, 2, 3, 4, 4, 5, 6, 7, 8, 9]
// output => 8;

function countUnique(arr) {
    // using SET.
    //   const set = new Set(arr);
    //   console.log(set);
    //   return set.size;

    // const uniqueArr = [];
    // for(let number of arr){
    //     const lastNumber = uniqueArr[uniqueArr.length -1]; // slice was not working here don't know why.
    //     if(lastNumber !== number){
    //         uniqueArr.push(number);
    //     }; 
    // };
    // return uniqueArr;

    // for just numbers. 
    let uniqueNo = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i + 1]) {
            uniqueNo++;
            arr[i] = arr[i + 2];
        };
    };
    return uniqueNo;
}
const result = countUnique([1, 1, 2, 2, 3, 4, 4, 5, 6, 7, 8, 9, 9]);
// const result = countUnique([1,1,1,1,1,1,1]);
console.log(result);