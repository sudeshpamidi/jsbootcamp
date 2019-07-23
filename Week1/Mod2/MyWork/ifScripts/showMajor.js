//Description : displays the student name,  major and location based on major code.
//Author : Sudesh Pamidi
"use strict"

//user input 
var studentName = 'Betty',
    studentMajor = 'ENG';

var nameOfMajor, location;

// Calculation 
if (studentMajor == 'BIOL') {
    nameOfMajor = 'Biology';
    location = 'Science Bldg, Room 310';

} else if (studentMajor == 'CSCI') {
    nameOfMajor = 'Computer Science';
    location = 'Sheppard Hall, Room 314';

} else if (studentMajor == 'ENG') {
    nameOfMajor = 'English';
    location = 'Kerr Hall, Room 201';

} else if (studentMajor == 'HIST') {
    nameOfMajor = 'History';
    location = 'Kerr Hall, Room 114';

} else if (studentMajor == 'MKT') {
    nameOfMajor = 'Marketing';
    location = 'Westly Hall, Room 310';

} else {
    nameOfMajor = '<unknow>';
    location = 'Nothing';
}

console.log("Student: " + studentName);
console.log("Major: " + nameOfMajor);
console.log("Advising Location: " + location);