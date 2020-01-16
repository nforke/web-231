/*
=========================================================
; Title:  Exercise 6.1
; Author: Nicole Forke
; Date:   15 January 2020
; Modified By: NA
; Description: Objects and Built-In Objects
;========================================================
*/

//statement that displays personal header
const header = require('./forke-header.js');
console.log(header.display("Nicole", "Forke", "Exercise 6.1",));

//start program

/*
  Expected Output:

  Secondary colors:
  Purple
  Orange
  Green
*/

// start program

//declare variable string to access the object property
var second = "";

//create object and define key/value pairs
var colors = {
  redBlue: "Purple",
  redYellow: "Orange",
  yellowBlue: "Green",
};

//use for...in loop to call the value of object properties
  for(color in colors) {
    colors += colors[second] + " ";
  };

//create new line
console.log(" ");

// output
console.log("Secondary " + "Colors: " + second);

//end program
