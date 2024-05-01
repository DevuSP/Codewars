// A stream of data is received and needs to be reversed.

// Each segment is 8 bits long, meaning the order of these segments needs to be reversed, for example:

// 11111111  00000000  00001111  10101010
//  (byte1)   (byte2)   (byte3)   (byte4)
// should become:

// 10101010  00001111  00000000  11111111
//  (byte4)   (byte3)   (byte2)   (byte1)
// The total number of bits will always be a multiple of 8.

// The data is given in an array as such:

// [1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]


function dataReverse(data) {
    let arr = [];
    let newArr = [];
    let i = 0;
    while (i < data.length) {
        console.log(data.slice(i, i + 8))
        data.slice(i, i + 8);
        arr.push(data.slice(i, i + 8));
        i += 8
    }
    arr = arr.reverse().join();
    arr
    for (let i = 0; i < arr.length; i++) {
        let num = Number(arr[i]);
        console.log(num);
        if (num === 1 || num === 0) {
            newArr.push(num)
        }
    }
    return newArr
}


const res = dataReverse([1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0]);

// const res = dataReverse([+0, +0, 1, +0, 1, +0, +0, 1, +0, +0, 1, 1, +0, 1, 1, +0])

console.log(res);
[1, +0, 1, +0, 1, +0, 1, +0, +0, +0, +0, +0, 1, 1, 1, 1, +0, +0, +0, +0, +0, +0, +0, +0, 1, 1, 1, 1, 1, 1, 1, 1]
