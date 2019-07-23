//Description : displays the greeting based of time
//Author : Sudesh Pamidi
"use strict"

// user input 
var income = 75000;
var filingStatus = "Joint";
var taxRate;

// Calculation  -- Single filing
if (filingStatus == "Single") {
    if (income <= 12000)
        taxRate = 0.05;
    else if (income > 12000 && income <= 24999.99)
        taxRate = 0.01;
    else if (income >= 25000 && income <= 74999.99)
        taxRate = 0.15;
    else if (income >= 75000)
        taxRate = 0.2;
} else if (filingStatus == "Joint") { // Calculation  -- Joint filing
    if (income <= 12000)
        taxRate = 0.00;
    else if (income > 12000 && income <= 24999.99)
        taxRate = 0.06;
    else if (income >= 25000 && income <= 74999.99)
        taxRate = 0.11;
    else if (income >= 75000)
        taxRate = 0.2;
} else
    console.log("Filing status should be either 'Single' or 'Joint'");

console.log("Tax Rate Percentage: " + taxRate * 100 + "%");