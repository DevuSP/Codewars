// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.

function humanReadable(seconds) {
    // Below 60sec;
    if (seconds <= 59) {
      if (seconds < 10) {
        return `00:00:0${String(seconds)}`
      }
      return `00:00:${String(seconds)}`;
    }
    // Below 3600sec;
    if (seconds <= 3599) {
      let min = Math.floor(seconds / 60);
      let sec = (seconds - (min * 60)) % 60;
      if (!min) {
        min = "00";
      } else if (min < 10) {
        min = `0${min}`
      }
      if (!sec) {
        sec = "00";
      } else if (sec < 10) {
        sec = `0${sec}`
      }
      seconds;
      sec;
      min
      return `00:${String(min)}:${String(sec)}`
    }
    // Below 3,59,999 sec;
    if (seconds <= 359999) {
      let hour = Math.floor(seconds / 3600);
      let min = Math.floor((seconds - (hour * 3600)) / 60);
      let sec = seconds - ((hour * 3600) + (min * 60));  
      if (!hour) {
        hour = "00";
      } else if (hour < 10) {
        hour = `0${hour}`
      }
      if (!min) {
        min = "00";
      } else if (min < 10) {
        min = `0${min}`
      }
      if (!sec) {
        sec = "00";
      } else if (sec < 10) {
        sec = `0${sec}`
      }
      hour;
      min;
      sec;
      return `${hour}:${min}:${sec}`
    }
  }
  const res = humanReadable(45296);
  // const res = humanReadable(35);
  console.log(res);
  
  // function humanReadable(seconds) {
  //   var pad = function(x) { return (x < 10) ? "0"+x : x; }
  //   return pad(parseInt(seconds / (60*60))) + ":" +
  //          pad(parseInt(seconds / 60 % 60)) + ":" +
  //          pad(seconds % 60)
  // }