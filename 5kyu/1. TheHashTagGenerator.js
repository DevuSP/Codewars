// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.
// Examples
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false

function generateHashtag(str) {
    if (str.length === 0) { return false; }
    const arr = str.split(" ");
    let arr1 = [];
    for(let i = 0; i < arr.length; i++){
      if(arr[i]){
        let upperCased = (arr[i].slice(0,1)).toUpperCase() + arr[i].slice(1);
        arr1.push(upperCased);
      }
    }
    const result = "#"+ arr1.join("");
    if(result.length === 1){  // this means result has only # in it, meaning empty hashtag.
      return false
    } else if(result.length>140){
      return false;
    }
    return result;
  }
  // const res = generateHashtag("Do            we have a hashtag");
  // const res = generateHashtag("code" + " ".repeat(140) + "wars");
  const res = generateHashtag("");
  // const res = generateHashtag("Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat")
  console.log(res);