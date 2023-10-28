// Enough is enough!
// Alice and Bob were on a holiday. Both of them took many pictures of the places they've been, and now they want to show Charlie their entire collection. However, Charlie doesn't like these sessions, since the motif usually repeats. He isn't fond of seeing the Eiffel tower 40 times.
// He tells them that he will only sit for the session if they show the same motif at most N times. Luckily, Alice and Bob are able to encode the motif as a number. Can you help them to remove numbers such that their list contains each number only up to N times, without changing the order?

// Task
// Given a list and a number, create a new list that contains each number of list at most N times, without reordering.
// For example if the input number is 2, and the input list is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].
// With list [20,37,20,21] and number 1, the result would be [20,37,21].

solution 
function deleteNth(arr,n){
    // ...
  
      for (let i=0; i<= arr.length; i++){ 
          while( arr.filter( (item) => item == arr[i]).length > n ){ 
             arr.splice(arr.lastIndexOf(arr[i]),1); 
          }
      }
      return arr;
  }
  
//   Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

solution1
function arrayDiff(a, b) {
  for(let i = a.length; i > -1 ; i--){
    for(let i2 = b.length; i2 > -1; i2--){
  if(a[i] === b[i2]){
    a.splice(i, 1)
    }
  }
}
  return a
}

solution2
function array_diff(a, b) {
  return a.filter(function(x) { return b.indexOf(x) == -1; });
}


solution3 clever 
function array_diff(a, b) {
    var arr = new Array();
    for(var i = 0;i<a.length;i++){
        if(b.indexOf(a[i])<0){
            arr.push(a[i]);
        }
    }
    return arr;
}