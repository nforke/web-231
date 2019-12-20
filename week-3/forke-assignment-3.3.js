/*
=================================================
; Title:  Exercise 3.3
; Author: Nicole Forke
; Date:   14 December 2019
; Modified By: Nicole Forke
; Description: Switch Statements
;================================================
*/

/*
  // Expected output
  The enter key was pressed
*/

//statement that displays personal header
const header = require('./forke-header.js');
console.log(header.display("Nicole", "Forke", "Assignment 3.3"));

// start program

// variables
let eventKeyCode = 13;

// functions
switch (eventKeyCode) {
  case 13:
    console.log('The enter key was pressed.');
    break;

  case 16:
    console.log('The shift key was pressed.');
   break;

  case 32:
    console.log('The spacebar key was pressed.');
    break;

  case 8:
    console.log('The backspace / delete key was pressed.');
    break;

  default:
    console.log('Unrecognized key.');
    break;
}

// end program
