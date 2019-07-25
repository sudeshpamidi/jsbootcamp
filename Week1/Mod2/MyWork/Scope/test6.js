"use strict"

var a = 6;

function test6() {
    var a = 7;

    function again() {
        let a = 8;
        console.log(a);
    }
    again();

    console.log(a);
}
test6();
console.log(a);

//  8
//  7
//  6