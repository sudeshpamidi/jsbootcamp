"use strict"
window.onload = function() {

    const btnConvert = document.getElementById("convert");
    const temperature = document.getElementById("temperature");
    const result = document.getElementById("result");

    btnConvert.onclick = convertCtoF;

    function convertCtoF() {

        result.innerHTML = temperature.value + "° Celsius " + parseFloat(temperature.value * (9 / 5) + 32).toFixed(2) + "° Forenheit";

    }

}