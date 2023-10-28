// Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times.

// Examples:

// encrypt("012345", 1)  =>  "135024"
// encrypt("012345", 2)  =>  "135024"  ->  "304152"
// encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

// encrypt("01234", 1)  =>  "13024"
// encrypt("01234", 2)  =>  "13024"  ->  "32104"
// encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"
// Together with the encryption function, you should also implement a decryption function which reverses the process.

// If the string S is an empty value or the integer N is not positive, return the first argument without changes.


function encrypt(text, n) {
    if(text === ""){return ""} else if(text === null){return null}
      for (let i = 0; i < n; i++) {
          let encryptedTextOdd = "";
          let encryptedTextEven = "";
          for (let i = 0; i < text.length; i++) {
              if (i % 2 === 0) {
                  encryptedTextEven += text.slice(i, i + 1)
              } else { encryptedTextOdd += text.slice(i, i + 1) }
          }
          text = encryptedTextOdd + encryptedTextEven;
      }
      return text;
  }
  
  function decrypt(encryptedText, n) {
    if(encryptedText === ""){return ""} else if(encryptedText === null){return null}
      let length = Math.floor(encryptedText.length / 2);
      let encrypt = encryptedText;
      for (let i = 0; i < n; i++) {
          let decrypt = "";
          for (let i = 0; i < length + 1; i++) {
              decrypt += encrypt.slice((length) + i, (length + i) + 1);
              if (i === length) { break };
              decrypt += encrypt.slice(i, i + 1);
          }
          encrypt = decrypt
          encryptedText = decrypt;
      }
      return encryptedText;
  }
console.log(encrypt("", 2))
console.log(decrypt("", 2))