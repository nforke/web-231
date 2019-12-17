/*
===================================================
; Title:  Exercise 4.1
; Author: Nicole Forke
; Date:   16 December 2019
; Modified By: Nicole Forke
; Description: Show the array length and their sum.
;==================================================
*/

/*Expected Output:
// The sum of the elements in the Array which should be 80.
// The length of the Array which should be 3.
*/

//statement that displays personal header
const header = require('./forke-header.js');
console.log(header.display("Nicole", "Forke", "Assignment 2.4"));

// start program

// variables:
var a = [10, 20, 50, 5];
a.length = 3;

// function using the reduce() method to get the sum:
var sum = areduce(function(x, y) { return x + y });

//output showing the array length (3) and the sum of the arrays (80):
console.log( "There are" + ' ' + alength ' ' + "arrays" + "and" + "here is the sum of the arrays" + ' ' + sum + ".");

// end program
