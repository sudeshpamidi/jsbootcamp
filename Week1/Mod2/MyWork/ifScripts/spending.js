//Description : This calculate the tax amount,  sub total and total after the discount. 
//Author : Sudesh Pamidi
"use strict"

var amountSpend = 260.00;
var taxPercent = 8;
var discount = 0;

if (amountSpend >= 100 && amountSpend < 250) // discount between 100 and 250
    discount = 10;
else if (amountSpend >= 250) // discount above 100 and 250
    discount = 20;

var subTotal = amountSpend - amountSpend * discount / 100;
var tax = subTotal * taxPercent / 100;
var totalAmount = subTotal + tax;

console.log("Sub Total : $" + subTotal);
console.log("Tax       : $" + tax);
console.log("Total     : $" + totalAmount);