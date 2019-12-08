/*
=================================================
; Title:  Assignment 2.4 Functions
; Author: Nicole Forke
; Date:   07 December 2019
; Modified By: Nicole Forke
; Description: Building Functions with & without Parameters
;================================================
*/

/*
; Expected Output:
;  Hello my name is <your actual name goes here>!

;  Today's date is <today's date> and the current temperature is <33.6 - use the formatNumber function> degrees.

;  I am <your actual age - parsed int value> years old and my savings account goal is <your actual goal - parsed float value> dollars.
*/

//statement that displays personal header
const header = require('./forke-header.js');
console.log(header.display("Nicole", "Forke", "Assignment 2.4"));

//start program

//variables
var first = "Nicole";
var last = "Forke";
let number = 47.5;
var age = "41";
var goal = "100,000.00";

//functions
function fullName(first, last){
  return (first + ' ' + last);
};

function dateWriter(year, month, day){
  return new Date(year, month, day);
};

function formatNumber(number, numOfFixedPositions){
  return number.toFixed(numOfFixedPositions);
};

function convertToInt(age){
  return age.parseInt(age, 10);
};

function convertToFloat(goal){
  return goal.parseFloat(goal);
};

//output
console.log("\n Hello my name is" + ' ' + fullName(first, last) + "!");
console.log(" \n Today is" + ' ' + dateWriter(2019, 11, 7).toLocaleDateString() + ' ' + "and the current temperature is" + ' ' + number + ' ' + "degrees.");
console.log(" \n I am" + ' ' + age + ' ' + "years old and my savings account goal is" + ' ' + goal + ' ' + "dollars.");

//end program
