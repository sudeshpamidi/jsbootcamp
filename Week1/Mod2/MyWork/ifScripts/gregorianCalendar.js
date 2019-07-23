// Description : This evaluates whether given year is leap year.
//Author : Sudesh Pamidi

"use strict"
var year = 1900;

if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0))
    console.log('Year ' + year + ' is a leap year.');
else
    console.log('Year ' + year + ' is NOT a leap year.')