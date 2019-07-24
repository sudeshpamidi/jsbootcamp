//Description : displays the greeting based of time
//Author : Sudesh Pamidi
"use strict"

// user input 
var income = 75000;
var filingStatus = "Joint";
var fedTaxRate;
var ssnTax = 0.062;
var medTax = 0.0145;

if (filingStatus == "Single") { // Calculation  -- Single filing
    if (income <= 12000)
        fedTaxRate = 0.05;
    else if (income > 12000 && income <= 24999.99)
        fedTaxRate = 0.01;
    else if (income >= 25000 && income <= 74999.99)
        fedTaxRate = 0.15;
    else if (income >= 75000)
        fedTaxRate = 0.2;
} else if (filingStatus == "Joint") { // Calculation  -- Joint filing
    if (income <= 12000)
        fedTaxRate = 0.00;
    else if (income > 12000 && income <= 24999.99)
        fedTaxRate = 0.06;
    else if (income >= 25000 && income <= 74999.99)
        fedTaxRate = 0.11;
    else if (income >= 75000)
        fedTaxRate = 0.2;
} else
    console.log("Filing status should be either 'Single' or 'Joint'");

var totalTax = fedTaxRate + ssnTax + medTax;
var grossPay = income - (income * (fedTaxRate + ssnTax + medTax));

console.log("Federal Tax    :" + fedTaxRate);
console.log("SSN            :" + ssnTax);
console.log("Medical        :" + medTax);
console.log("Income earnined:" + income);
console.log("Federal tax withheld : $" + fedTaxRate * income)
console.log("SSN  withheld : $" + ssnTax * income)
console.log("Medical withheld : $" + medTax * income)
console.log("Gross Pay: $" + grossPay);