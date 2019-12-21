/*
===================================================
; Title:  Exercise 4.3
; Author: Nicole Forke
; Date:   21 December 2019
; Modified By: Nicole Forke
; Description: Filtering Arrays
;==================================================
*/

/*
  Expected output:

  FirstName LastName
  Exercise 4.3
  Today's Date

  -- DISPLAYING ARRAY ITEMS --
  Car
  Truck
  Motorcycle
  Airplane
  Bus

  -- SELECTED VALUE --
  Motorcycle

  -- SELECTED VALUE --
  Bus
*/

//statement that displays personal header
const header = require('./forke-header.js');
console.log(header.display("Nicole", "Forke", "Assignment 4.3",));

// start program

// variables declared in an array
var vehicles = ["Car", "Truck", "Motorcycle", "Airplane", "Bus"];

// function
function getValue(arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === val)
      console.log(arr[i]);
  }
}

// Output to display original array
console.log("\n-- DISPLAY ARRAY ITEMS --");

for(var x = 0; x < vehicles.length; x ++) {
  console.log(vehicles[x]);
}

// new line
console.log("");

// Output to display two selected values
console.log("-- SELECTED VALUE --");
getValue(vehicles, "Motorcycle");

// new line
console.log("");

console.log("-- SELECTED VALUE --");
getValue(vehicles, "Bus");

// end program
