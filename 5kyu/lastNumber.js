function incrementString(strng) {
    let numberIndex = strng.match(/\d/);
    if(numberIndex === null){
        return strng + "1";
    }
    let number = strng.slice(numberIndex.index, strng.length);
    let words = strng.slice(0, numberIndex.index);
    let total = "";
    if (number.slice(0, 1) === "0") {
        let startFromZeroes = "";
        let numbersAfterZeroes = "";
        for (let i = 0; i < number.length; i++) {
            console.log(number.charAt(i));
            if (number.charAt(i) === "0") {
                startFromZeroes += "0";
            } else { numbersAfterZeroes += number.charAt(i)};
        };
        console.log(startFromZeroes);
        let indexBeforeAddition = numbersAfterZeroes.length;
        numbersAfterZeroes = String(Number(numbersAfterZeroes) + 1);
        let indexAfterAddition = numbersAfterZeroes.length;
        if(indexAfterAddition > indexBeforeAddition){
            startFromZeroes = startFromZeroes.slice(0, startFromZeroes-1);
            console.log(startFromZeroes);
        }
        total = startFromZeroes + numbersAfterZeroes;
    } else {
       total = String(Number(number) + 1);
    }
  return words + total

}
console.log(incrementString("fo99obar99"));