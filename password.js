const reg = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{6,16}$/
const result = reg.test('fjd3IR9') //true
const result1 = reg.test('ghdfj32') // false
const result2 = reg.test('DSJKHD23') // false

console.log(result)
console.log(result1)
console.log(result2)