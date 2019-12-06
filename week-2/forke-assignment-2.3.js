/*
=================================================
; Title:  forke-header-test.js
; Author: Nicole Forke
; Date:   05 December 2019
; Modified By: Nicole Forke
; Description: Exercise 2.3 - Function Properties
;================================================
*/

/*
  Expected output:

  Hello FirstName LastName!
*/

//statement that displays personal header
const header = require('./forke-header.js');

//start program

//functions
function myName(){
  return myName.Nicole
};

function myLastName(){
  return myLastName.Forke
};


//function properties
myName.Nicole = "Nicole";
myLastName.Forke = "Forke";

console.log(header.display("Nicole", "Forke", "Exercise 2.2 - Header"));
console.log("Hello " +  myName() + ' ' + myLastName() + "!");

//end program
