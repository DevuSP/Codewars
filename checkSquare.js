// Checking square in another array.
// arr1=[1,2,3,4] arr2=[1,9,4,16]

const squareCheck = (array1, array2) => {

        if (array1.length !== array2.length) { return false; };
    //     let isSquare = true;

    //     array1.forEach((e) => {
    //         let array2Index = array2.indexOf(e * e);
    //         if (array2Index < 0) {
    //             isSquare = false;
    //         };
    //         array2.splice(array2Index, 1);
    //     });
    //     return isSquare;


    let map1 = {};
    let map2 = {};
    let isSquare = true;
    for(let item of array1){
        map1[item] = (map1[item] || 0) + 1; 
    }
    for(let item of array2){
        map2[item] = (map2[item] || 0) + 1; 
    }
    for(let key in map1){
        if(!map2[key * key]){    // Checking squared keys in map2. 
            isSquare = false;
        };
        if(map1[key] !== map2[key * key]){   // Checking the squred value.
            isSquare = false;
        };
    };
    return isSquare;
};
const result = squareCheck([1, 2, 4, 4, 4, 9, 12], [1, 4, 16, 16, 6, 81, 144]);
console.log(result);