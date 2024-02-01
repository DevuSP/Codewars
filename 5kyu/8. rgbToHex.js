// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

// Examples (input --> output):
// 255, 255, 255 --> "FFFFFF"
// 255, 255, 300 --> "FFFFFF"
// 0, 0, 0       --> "000000"
// 148, 0, 211   --> "9400D3"

function rgb(r, g, b) {
    const toHex = (number) => {
        if (number <= 0) { return "00" }
        else if (number >= 255) { return "FF" }
        let firstHex;
        let SecondHex;
        let hexAlpha = ["A", "B", "C", "D", "E", "F"];
        let divide = String(number / 16).split(".");
        console.log(divide);
        if (divide[0] <= 9) {
            firstHex = String(divide[0]);
        } else if (divide[0] > 9 && divide[0] < 16) {
            firstHex = hexAlpha[divide[0] - 10];
            console.log(firstHex);
        }

        let divideSecond = Math.round(Number("0." + String(divide[1]).slice(0, 2)) * 16);
        console.log(divideSecond);
        if (divideSecond && divideSecond > 9) {
            SecondHex = hexAlpha[divideSecond - 10];
        } else if (!divideSecond) {
            SecondHex = "0";
        } else {
            SecondHex = divideSecond;
        }
        console.log(SecondHex);
        return firstHex + SecondHex;
    };
    return toHex(r) + toHex(g) + toHex(b);
}

const result = rgb(71, 166, 48);
console.log(result); //47A630
