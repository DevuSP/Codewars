// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

solution

function disemvowel(str) {
    let arr = str.split("");
    let i = 0;
    while (i < arr.length) {
        if ((/^[aeiou]$/i).test(arr[i])) {
            arr.splice(i, 1);
        } else { i++ }
    }
    return arr.join("").toString();
}

function disemvowel(str) {
    return str.replace(/[aeiou]/gi, '');
}

// Mr. Scrooge has a sum of money 'P' that he wants to invest. Before he does, he wants to know how many years 'Y' this sum 'P' has to be kept in the bank in order for it to amount to a desired sum of money 'D'.

// The sum is kept for 'Y' years in the bank where interest 'I' is paid yearly. After paying taxes 'T' for the year the new sum is re-invested.

// Note to Tax: not the invested principal is taxed, but only the year's accrued interest

// Example:

//   Let P be the Principal = 1000.00      
//   Let I be the Interest Rate = 0.05      
//   Let T be the Tax Rate = 0.18      
//   Let D be the Desired Sum = 1100.00


// After 1st Year -->
//   P = 1041.00
// After 2nd Year -->
//   P = 1083.86
// After 3rd Year -->
//   P = 1128.30
// Thus Mr. Scrooge has to wait for 3 years for the initial principal to amount to the desired sum.

// Your task is to complete the method provided and return the number of years 'Y' as a whole in order for Mr. Scrooge to get the desired sum.

// Assumption: Assume that Desired Principal 'D' is always greater than the initial principal. However it is best to take into consideration that if Desired Principal 'D' is equal to Principal 'P' this should return 0 Years.



function calculateYears(principal, interest, tax, desired) {
    // your code
  if(principal === desired){return 0};
  let y = 0;
  while(principal === desired || principal < desired){
    principal += (principal * interest) - ((principal * interest) * tax);
    y++
  }
  return y;
  }