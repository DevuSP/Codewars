function noBoringZeros(n) {
  // your code
  n = n.toString().split("");
  for (let i = 0; i < n.length; i++) {
   if(n.slice(-1) == "0"){
    n.pop(); 
   } else {
    break;
   }
  }
  return Number(n.join(""));
}
console.log(noBoringZeros(14050))
