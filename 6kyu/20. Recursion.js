// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

solution
function arrayDiff(a, b) {
    let i = 0;
    function arrayDifff(a, b) {
        let index = a.indexOf(b[i]);
        if (index > -1) {
            a.splice(index, 1);
            arrayDifff(a, b);
        } else if (i < b.length) {
            i++;
            arrayDifff(a, b);
        }
        return a;
    }
    return arrayDifff(a, b);
}

arrayDiff([1,2,2], [1]);