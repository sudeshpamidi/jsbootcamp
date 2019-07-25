//Discription : To display mailing label
//Author : Sudesh Pamidi
"use strict"

// Function Display Mailing Label
function diplayMailingLabel(name, address, city, state, zip) {
    console.log(name);
    console.log(address);
    console.log(city);
    console.log(state);
    console.log(zip);
};

// Function to add two variables
function addNumbers(num1, num2) {

    var result = num1 + num2;
    console.log(num1 + " + " + num2 + " = " + result);
}


// Function to add two variables
function substractNumbers(num1, num2) {

    var result = num1 - num2;
    console.log(num1 + " - " + num2 + " = " + result);
}

// Function to diplay receipt
function displayReceipt(totalDue, amountPaid) {

    var change = totalDue - amountPaid;

    console.log("Total Due  : " + totalDue);
    console.log("Amount Paid: " + amountPaid);

    if (change <= 0)
        console.log("Change to Return: " + Math.abs(change));
    else
        console.log("Change Due: " + Math.abs(change));
}


var name = "Sudesh Pamidi",
    address = "123 Fox Hallow",
    city = "South Windsor",
    state = "CT",
    zip =
    "02345";

diplayMailingLabel(name, address, city, state, zip);

console.log("-----------------------------------");

var name = "Michel Turner",
    address = "345 Mavalli Rd",
    city = "Newyork",
    state = "NY",
    zip = "12345";
diplayMailingLabel(name, address, city, state, zip);

console.log("-----------------------------------");

addNumbers(1, 2);

displayReceipt(120, 130);