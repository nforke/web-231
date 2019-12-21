/*
===================================================
; Title:  Exercise 4.2
; Author: Nicole Forke
; Date:   21 December 2019
; Modified By: Nicole Forke
; Description: Function using Arrays
;==================================================
*/

/*
  Expected output:

  FirstName LastName
  Exercise 4.3
  Today's Date

  Apple
  Orange
  Banana
  Mango
  Pear
*/

//statement that displays personal header
const header = require('./forke-header.js');
console.log(header.display("Nicole", "Forke", "Assignment 4.2",));

// start program

// declared variable using an array for fruits
var fruits = [ "\nApple", "Orange", "Banana", "Mango", "Pear"];

// getFruit() function using the for loop to call the array

function getFruit (arr) {
  for (i = 0; i < arr.length; i ++){
    console.log(arr[i]);
  }
}

// Output of getFruit() function
getFruit(fruits);

// end program
