// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

// solution
const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')

// solution 2
function longest(s1, s2) {
    // your code
    let a = (s1 + s2).split("")
     let b =""
     a = a.sort()
        for(i = 0; i < a.length; i++){
           if(a[i] != a[i-1]){b+=a[i]}
        }
     return b
    }