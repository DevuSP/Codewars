// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

function pigIt(str) {
    //Code here
    const resultArr = str.split(" ").map((element) => {
        if (!/[a-zA-Z]/.test(element)) { return element; }
        return element.slice(1) + element.slice(0, 1) + 'ay';
    })
    return resultArr.join(" ");
}
// const res = pigIt('Pig latin is cool !')
const res = pigIt('This is my String .')
console.log(res);