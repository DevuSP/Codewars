// There is a bus moving in the city which takes and drops some people at each bus stop.

// You are provided with a list (or array) of integer pairs. Elements of each pair represent the number of people that get on the bus (the first item) and the number of people that get off the bus (the second item) at a bus stop.

// Your task is to return the number of people who are still on the bus after the last bus stop (after the last array). Even though it is the last bus stop, the bus might not be empty and some people might still be inside the bus, they are probably sleeping there :D

// Take a look on the test cases.

// Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the returned integer can't be negative.

// The second value in the first pair in the array is 0, since the bus is empty in the first bus stop.

solution

var number = function(busStops){
    // Good Luck!
    let peopleEntered = [];
    let peopleExit = [];
  for (let i = 0; i < busStops.length; i++){
    peopleEntered.push(busStops[i][0]);
    peopleExit.push(busStops[i][1]);
  }  
    let sum1 = 0;
    for (let i = 0; i < peopleEntered.length; i++) {    //to add array
      sum1 += peopleEntered[i];
  }
    let sum2 = 0
     for (let i = 0; i < peopleExit.length; i++) {
      sum2 += peopleExit[i];
  }
    return sum1 - sum2;
    }

// Probelem
//Simple, given a string of words, return the length of the shortest word(s).
//String will never be empty and you do not need to account for different data types.


solution
function findShort(s){
  let arr = s.split(" ");
    let shortestLength = 1000
    for(let i = 0; i < arr.length; i++){
      let length = arr[i].length
      if(length < shortestLength){
        shortestLength = length
      }
    }
    return shortestLength;
  }


solution2
  function findShort(s){
    return Math.min(...s.split(" ").map (s => s.length));
}

// Factorial :-Your task is to write function factorial.
// Solution 1
function factorial(n){
  //your code here
  if(n == 1 || n == 0){
    return 1;
  }
  let factorial = 1;
  for(let i = 1; i < n + 1; i++){
    factorial *= i;
  }
  return factorial;
}

factorial(213);
// Solution 2
function factorial(n)
{
  // Calculate the factorial here
  if(n == 0 || n == 1){return 1}
  if(n < 0 || n > 12){throw new RangeError()}
  let factorial = 1;
  for(let i = 1; i < n+1; i++){
    factorial *= i;
  }
  return factorial;
}



// Scenario
// Several people are standing in a row divided into two teams.
// The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.

// Task
// Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.

// Notes
// Array size is at least 1.
// All numbers will be positive.
// Input >> Output Examples
// rowWeights([13, 27, 49])  ==>  return (62, 27)
// Explanation:
// The first element 62 is the total weight of team 1, and the second element 27 is the total weight of team 2.

// rowWeights([50, 60, 70, 80])  ==>  return (120, 140)
// Explanation:
// The first element 120 is the total weight of team 1, and the second element 140 is the total weight of team 2.

// rowWeights([80])  ==>  return (80, 0)
// Explanation:
// The first element 80 is the total weight of team 1, and the second element 0 is the total weight of team 2.

function rowWeights(array){
  //your code here
  let weights = [0, 0];
  for(let i = 0; i < array.length; i++){
    if(i % 2 == 0){
      weights[0] += array[i];
    } else {
      weights[1] += array[i];
    }
  }
  return weights;
}