//Description : displays the greeting based of time
//Author : Sudesh Pamidi
"use strict"

//user input 
var currentTime = "25.00";
var greeting;

//convert the time into float
var convertedCurrentTime = parseFloat(currentTime)

// make sure that user input is in correct format.
if (!isNaN(convertedCurrentTime)) {
    if (convertedCurrentTime > 24 || convertedCurrentTime.toFixed(2) > 59) {
        greeting = ""
    } else {
        if (convertedCurrentTime >= 0 && convertedCurrentTime <= 10.00)
            greeting = "Good morning!";
        else if (convertedCurrentTime > 10.00 && convertedCurrentTime <= 16.59)
            greeting = "Good day!";
        else if (convertedCurrentTime >= 17.00 && convertedCurrentTime < 24)
            greeting = "Good evening!";
    }
}
console.log(greeting);