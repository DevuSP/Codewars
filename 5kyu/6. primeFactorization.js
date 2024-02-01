// Given a positive number n > 1 find the prime factor decomposition of n. The result will be a string with the following form :

//  "(p1**n1)(p2**n2)...(pk**nk)"
// with the p(i) in increasing order and n(i) empty if n(i) is 1.

// Example: n = 86240 should return "(2**5)(5)(7**2)(11)"

function primeFactors(n) {
    //your code here
    let allPrimeFactors = "";
    for (let i = 2; i < n*2; i++) {
        let primeOrNot = [];
        for (let j = 2; primeOrNot.length > 2; j++) {
            if (i % j === 0) { primeOrNot.push(j) }
        }
        if (n === 1 || n === 0) { break };
        let thisFactor = factor(i);
        if (thisFactor === 0) { continue };
        if (thisFactor === 1) {
            allPrimeFactors += `(${i})`
        } else {
            allPrimeFactors += `(${i}**${thisFactor})`
        }
        console.log(i);
    }

    function factor(primeNo) {
        let times = 0;
        while (n % primeNo === 0) {
            n = n / primeNo
            times += 1;
        }
        return times;
    }

    return allPrimeFactors;
}
console.log(primeFactors(7775460));
