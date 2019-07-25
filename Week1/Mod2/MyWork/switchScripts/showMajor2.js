//Description : displays the student name,  major and location based on major code.
//Author : Sudesh Pamidi
"use strict"

//user input 
var studentName = 'Betty',
    studentMajor = 'ENG';

var nameOfMajor, location;

// Calculation 

switch (studentMajor) {
    case 'BIOL':
        nameOfMajor = 'Biology';
        location = 'Science Bldg, Room 310';
        break;
    case 'CSCI':
        nameOfMajor = 'Computer Science';
        location = 'Sheppard Hall, Room 314';
        break;
    case 'ENG':
        nameOfMajor = 'English';
        location = 'Kerr Hall, Room 201';
        break;

    case 'HIST':
        nameOfMajor = 'History';
        location = 'Kerr Hall, Room 114';
        break;
    case 'MKT':
        nameOfMajor = 'Marketing';
        location = 'Westly Hall, Room 310';
        break;
    default:
        nameOfMajor = '<unknown>';
        location = '<unknown>';
}

console.log("Student: " + studentName);
console.log("Major: " + nameOfMajor);
console.log("Advising Location: " + location);