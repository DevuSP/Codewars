// Introduction
// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

// Task
// Given a year, return the century it is in.

// Examples
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20

solution 

function century(year) {
    if(Number.isInteger(year / 100)){
      return year / 100;
    }
    else if(year < 100){
      return 1
    }
    else{
    let a = (((year / 100) + 1).toString()).slice(0, (year.toString).length - 3);
      return Number(a)
  }
  }

  solution
  const century = year => Math.ceil(year/100) //The Math.ceil() static method always rounds up and returns the smaller integer greater than or equal to a given number.
