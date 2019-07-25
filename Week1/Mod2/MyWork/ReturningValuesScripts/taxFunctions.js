//Discription :
//Author: Sudesh Pamidi

"use strinct"

//Calculating Social Security Tax
function getSocSecTax(grossPay) {
    ssnTax = 0.062;
    return grossPay * ssnTax;
}

//Calculating Medicare Tax
function getMedicareTax(grossPay) {
    medicareTax = 0.0145;
    return grossPay * medicareTax;
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
    //return Math.round(grossPay * taxRate * 100) / 100;
    return (grossPay * taxRate).toFixed(2);

}

var grossPay = 750
var withHoldingAmount = getFederalTax(grossPay, 0);
console.log("Gross Pay: $" + grossPay + " Withholding Amount: " + withHoldingAmount);

grossPay = 1550
withHoldingAmount = getFederalTax(grossPay, 2);
console.log("Gross Pay: $" + grossPay + " Withholding Amount: " + withHoldingAmount);

grossPay = 1100
withHoldingAmount = getFederalTax(grossPay, 6);
console.log("Gross Pay: $" + grossPay + " Withholding Amount: " + withHoldingAmount);

grossPay = 10000
withHoldingAmount = getFederalTax(grossPay, 300);
console.log("Gross Pay: $" + grossPay + " Withholding Amount: " + withHoldingAmount);