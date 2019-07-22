"use strict"
var x1 = 2,
    y1 = 2,
    x2 = 4,
    y2 = 4;

var distance = Math.round(Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2)) * 100) / 100;
console.log("The distance between co-ordinates (" + x1 + "," + y1 +
    ") and (" + x2 + "," + y2 + ") is " + distance);