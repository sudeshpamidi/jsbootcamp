"use strict"

var a = 6;

function test5() {
    var a = 7;

    function again() {
        var a = 8;
        console.log(a);
    }
    again();

    console.log(a);
}
test5();
console.log(a);