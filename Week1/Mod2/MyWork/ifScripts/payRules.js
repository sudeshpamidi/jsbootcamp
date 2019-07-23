//Description : This calculate the grosspay for given wored hours.
//Author : Sudesh Pamidi

"use strict"
var payRate = 10.00;
var hoursWorked = 30;
var grossPay = payRate * hoursWorked;

if (hoursWorked > 40)
    grossPay = grossPay + (hoursWorked - 40) * 0.5 * payRate

console.log("Total hours worked : " + hoursWorked);
console.log("Over time worked   : " + (hoursWorked - 40));
console.log("Pay rate           : " + payRate);
console.log("Over time rate     : " + 1.5 * payRate);
console.log("Gross pay          : " + grossPay);