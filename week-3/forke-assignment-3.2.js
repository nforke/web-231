/*
=================================================
; Title:  Exercise 3.2
; Author: Nicole Forke
; Date:   12 December 2019
; Modified By: Nicole Forke
; Description: Pattern Matching Functions
;================================================
*/

/*
  // output from the match() function
  false
  true

  // output from the if...else blocks
  Truck and Car do not match!
  Bike and Bike do match!
  Four and Three do not match!
*/

//statement that displays personal header
const header = require('./forke-header.js');
console.log(header.display("Nicole", "Forke", "Assignment 2.4"));

// start program

// variables
var testVar1 = "Truck";
var testVar2 = "Car";
var testVar3 = "Bike";
var testVar4 = "Four";
var testVar5 = "Three";
var testVar6 = "Bike";

// functions
function match(arg1, arg2) {
  if (arg1 === arg2)
    return true;
  else {
    return false;
  }
}

function logMismatch(arg1, arg2){
  console.log(arg1 + " and " + arg2 + " do not match!");
}

function logMatch(arg1, arg2){
  console.log(arg1 + " and " + arg2 + " do match!");
}

// conditional if... else statements
if (match(testVar1, testVar2)) {
  logMatch(testVar1, testVar2);
} else {
  logMismatch(testVar1, testVar2);
};

if (match(testVar3, testVar6)) {
  logMatch(testVar3, testVar6);
} else {
  logMismatch(testVar3, testVar6);
};

if (match(testVar4, testVar5)) {
  logMatch(testVar4, testVar5);
} else {
  logMismatch(testVar4, testVar5);
};

// output
console.log(match("A", "B"));
console.log(match(2, 2));

//end program
