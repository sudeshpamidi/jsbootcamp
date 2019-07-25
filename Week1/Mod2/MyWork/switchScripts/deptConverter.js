//Discription : To print a department name based on dept code
//Author : Sudesh Pamidi
"use strict"

var deptCode = 18,
    deptName;

switch (deptCode) {
    case 1:
        deptName = "Marketing";
        break;
    case 5:
        deptName = "Human Resource";
        break;
    case 10:
        deptName = "Accounting";
        break;
    case 12:
        deptName = "Legal";
        break;
    case 18:
        deptName = "IT";
        break;
    case 20:
        deptName = "Customer Relations";
        break;
    default:
        deptName = "<unknown>";
        break;
}

console.log('Department Code : ' + deptCode + ", Department Name: " + deptName)