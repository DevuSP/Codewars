// String Anagram (length of string is same and all the string characters are present, be it in jumbled index.)
// "hello" => "llheo" (true).

function isAnagram(string1, string2) {
    if (string1.length !== string2.length) {
        return false;
    }
    //   string2 = string2.split("");
    //   console.log(string2);
    //   for(let i = 0; i < string1.length; i++){
    //     let index = string2.indexOf(string1[i]);
    //     if( index > -1){
    //         console.log(string2);
    //         string2.splice(index, 1);
    //     } else {
    //         return false;
    //     }
    //   }
    //   return true;

    let counter = {};
    for (letter of string1) {
        counter[letter] = (counter[letter] || 0) + 1;
        console.log(counter)
    }

    for (items of string2) {
        console.log(counter[items]);
        if (!counter[items]) { // if counter keys has items from string2.
            return false;
        }
        counter[items -= 1]; // when value is 0 already then it will throw false.
    }
    console.log
    return true
}
console.log(isAnagram("hello", "llheo"))
