//Dicription : This Function is to converts from Celcius to Forenheit
//Parameters : Celcius
//Returns    : Forenheit 
//Author: Sudesh Pamidi
"use strict"

function convertCtoF(celcius) {
    //  Math.round((celcius * (9 / 5) + 32) * 100) / 100; -- instead ogf this write as below - Sudesh
    return parseFloat(celcius * (9 / 5) + 32).toFixed(2);
}

var celcius = 100;
var forenheit = convertCtoF(celcius);
console.log(celcius + "'C = " + forenheit + "'F.");

celcius = 125;
forenheit = convertCtoF(celcius);
console.log(celcius + "'C = " + forenheit + "'F.");