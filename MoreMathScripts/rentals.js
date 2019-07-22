"use strict"
var people, noOfVans;

people = 38;
noOfVans = Math.ceil(people / 15);
var amount = noOfVans * 250;
var perPerson = Math.round((amount / people) * 100) / 100;

console.log("For " + people + " people, " + noOfVans + " vans needed. Total cost $" + amount);
console.log("Cost of each person $" + perPerson);