"use strict"

window.onload = function() {

        const btnAdd = document.getElementById("add");
        const btnSubtract = document.getElementById("subtract");
        const btnMultiply = document.getElementById("multiply");
        const btnDivide = document.getElementById("divide");
        const number1 = document.getElementById("number1");
        const number2 = document.getElementById("number2");
        const result = document.getElementById("result");

        //converting into number/float

        btnAdd.onclick = function() {
            let val1 = parseFloat(number1.value);
            let val2 = parseFloat(number2.value);
            result.value = val1 + val2;
        };

        btnSubtract.onclick = function() {
            let val1 = parseFloat(number1.value);
            let val2 = parseFloat(number2.value);
            result.value = val1 - val2;
        };
        btnMultiply.onclick = function() {
            let val1 = parseFloat(number1.value);
            let val2 = parseFloat(number2.value);
            result.value = val1 * val2;
        };
        btnDivide.onclick = function() {
            let val1 = parseFloat(number1.value);
            let val2 = parseFloat(number2.value);
            result.value = val1 / val2;
        };


    }
    /*
    window.onload = function() {
        
        
        


    } */
;