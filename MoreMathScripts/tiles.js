"use strict"
var len, width, noOfBoxes;

len = 3;
width = 8;

var noOfTiles = len * width;
var extraTiles = Math.ceil(noOfTiles * 0.1);

noOfBoxes = Math.ceil((noOfTiles + extraTiles) / 12);
console.log("Total no of Boxes needed : " + noOfBoxes);