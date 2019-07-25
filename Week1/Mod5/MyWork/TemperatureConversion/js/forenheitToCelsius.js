"use strict"
window.onload = function() {

    const btnConvert = document.getElementById("convert");
    const temperature = document.getElementById("temperature");
    const result = document.getElementById("result");

    btnConvert.onclick = convertCtoF;

    function convertCtoF() {
        //  Math.round((celcius * (9 / 5) + 32) * 100) / 100; -- instead ogf this write as below - Sudesh                    
        //result.innerHTML = parseFloat(temperature.value * (9 / 5) + 32).toFixed(2);

        result.innerHTML = temperature.value + "° Forenheit " + Math.round(parseFloat(temperature.value - 32) * (5 / 9) * 100) / 100 + " ° Censius";

    }

}