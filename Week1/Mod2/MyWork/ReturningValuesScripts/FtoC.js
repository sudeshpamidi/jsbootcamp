//Dicription : This Function is to converts from Forenheit to Celcius 
//Parameters : Number
//Returns    : Celcius
//Author: Sudesh Pamidi
"use strict"

function convertFtoC(farenheit) {
    return Math.round((farenheit - 32) * (5 / 9) * 100) / 100;
}

var celcius = convertFtoC(32);
console.log(32 + "'F = " + celcius + "'C.")

celcius = convertFtoC(123);
console.log(123 + "'F = " + celcius + "'C.")