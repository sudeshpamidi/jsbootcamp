//Discription : This containes functions to calculate gross pay
//Author: Sudesh Pamidi

"use strinct"

window.onload = function() {

    const workedHours = document.getElementById("hourswoked");
    const payRate = document.getElementById("payrate");
    const filingStatus = document.getElementById("filingstatus");
    const withholdingCode = document.getElementById("withholdingcode");
    const btnCalculate = document.getElementById("calculate");
    const divResult = document.getElementById("results");



    btnCalculate.onclick = function() {

        let grossPay = parseFloat(workedHours.value * payRate.value);
        let ssnTax = getSocSecTax(grossPay);
        let medicareTax = getMedicareTax(grossPay);
        let fedTax = getFederalTax(grossPay, withholdingCode.value);
        let netPay = Math.round((grossPay - ssnTax - medicareTax - fedTax) * 100) / 100;

        divResult.innerHTML = "<strong>Gross Pay:</strong> $" + grossPay +
            "<br> <strong>Withholding Amount:</strong> " + fedTax +
            "<br> <strong>SSN Tax:</strong> " + ssnTax +
            "<br> <strong>Medicare Tax:</strong> " + medicareTax +
            "<br> <strong>Net pay:</strong> " + netPay;

    };


}



//Calculating Social Security Tax
function getSocSecTax(grossPay) {
    ssnTax = 0.062;
    return Math.round(grossPay * ssnTax * 100) / 100;
}

//Calculating Medicare Tax
function getMedicareTax(grossPay) {
    medicareTax = 0.0145;
    return Math.round(grossPay * medicareTax * 100) / 100;
}

//Calculating Federal Tax
function getFederalTax(grossPay, withholdingCode) {
    var taxRate;
    switch (withholdingCode) {
        case 0:
            taxRate = 0.23;
            break;
        case 1:
            taxRate = 0.21;
            break;
        case 2:
            taxRate = 0.195;
            break;
        case 3:
            taxRate = 0.185;
            break;
        case 4:
            taxRate = 0.18;
            break;
        default:
            taxRate = 0.18 - 0.5 * (withholdingCode - 4) / 100;
            if (taxRate < 0)
                taxRate = 0;

    }
    return Math.round(grossPay * taxRate * 100) / 100;
}