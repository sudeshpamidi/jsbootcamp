"use strict"
var federalTax = 0.23;
var salary;
salary = 100000;
var withheldAmount = Math.round(salary * federalTax * 100) / 100;

console.log("For the salary: $" + salary + " the withheld amount is $" + withheldAmount);