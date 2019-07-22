"use strict"
var usDollar, targetCurrency, exchangeRate, convertedCurrency;

usDollar = 200.00;
targetCurrency = "Euro";


switch (targetCurrency) {
    case 'Euro':
        exchangeRate = 0.89;
        break;
    case 'Yen': // Japanies Yen
        exchangeRate = 107.91;
        break;
    case 'Aus Dollar': //Australian 
        exchangeRate = 1.421380;
        break;
    case 'Rupee': //Indian Rupee
        exchangeRate = 68.928943;
        break;
    case 'Canadian': //Canadian 
        exchangeRate = 1.311138;
        break;
    default:
        exchangeRate = 0;
}

convertedCurrency = Math.round(usDollar * exchangeRate * 100) / 100;
console.log("$" + usDollar + " US dollar(s) = " + convertedCurrency + " " + targetCurrency + "(s)")