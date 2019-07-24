//Description : displays the greeting based of time
//Author : Sudesh Pamidi
"use strict"

//user input 
var hours = new Date().getHours();
var greeting;

console.log("hours : " + hours);

// make sure that user input is in correct format.
if (hours >= 0 && hours <= 10)
    greeting = "Good morning!";
else if (hours > 10 && hours <= 16.59)
    greeting = "Good day!";
else if (hours >= 17.00 && hours < 24)
    greeting = "Good evening!";

console.log(greeting);