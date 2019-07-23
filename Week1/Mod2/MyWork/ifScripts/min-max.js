//Description : displays the smallest and largest of three numbsers
//Author : Sudesh Pamidi
"use strict"

// user input 
var a = 1,
    b = 4,
    c = 2;

// Calculations
if (a >= b && b >= c)
    console.log('Smallest number is :' + c + "  and largest number is " + a);
else if (b >= c && c >= a)
    console.log('Smallest number is :' + a + "  and largest number is " + b);
else if (c >= a && a >= b)
    console.log('Smallest number is :' + b + "  and largest number is " + c);
else if (a <= b && b <= c)
    console.log('Smallest number is :' + a + "  and largest number is " + c);
else if (b <= c && c <= a)
    console.log('Smallest number is :' + b + "  and largest number is " + a);
else if (c <= a && a <= b)
    console.log('Smallest number is :' + c + "  and largest number is " + b);