/*
====================================================
; Title:  Exercise 4.4
; Author: Nicole Forke
; Date:   21 December 2019
; Modified By: Nicole Forke
; Description: Displaying, Filtering, Sorting Arrays
;===================================================
*/
/*

  FirstName LastName
  Assignment 4.4
  Today's Date

  -- ORIGINAL ARRAY --
  Alabama
  Nebraska
  Iowa
  California
  Nevada

  -- SORTED ARRAY --
  Alabama
  California
  Iowa
  Nebraska
  Nevada

  -- SELECTED VALUE --
  Iowa

*/

//statement that displays personal header
const header = require('./forke-header.js');
console.log(header.display("Nicole", "Forke", "Assignment 4.4",));

// start program

// declared variables in an array
var states = ["Alabama", "Nebraska", "Iowa", "California", "Nevada"];

// function
function getState(arr, val) {
  if(arr === val)
    return true;
}

// new line
console.log("");

// output of original array
console.log("-- ORIGINAL ARRAY --");
for(var x = 0; x < states.length; x++) {
  console.log(states[x]);
}

// new line
console.log("");

// output sorting array
console.log("-- SORTED ARRAY --")
statesSorted = states.sort();
for(var i = 0; i < statesSorted.length; i++) {
  console.log(states[i]);
}

// new line
console.log("");

// output of selected using filter function
console.log("-- SELECTED ARRAY --");
var statesSelected = states.filter(function(states) {
  return getState(states, 'Nebraska');
})[0];
console.log(statesSelected);


// end program
