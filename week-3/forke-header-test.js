/*
============================================
; Title:  forke-header-test.js
; Author: Nicole Forke
; Date:   05 December 2019
; Modified By: Nicole Forke
; Description: Displays a formatted header
;===========================================
*/

/**
* Params: firstName, lastName, assignment
* Response: output
* Description: Returns a well-formatted string header
*/

// import statement for my header
const header = require('./forke-header.js');

console.log(header.display("Nicole", "Forke", "Exercise 2.2 - Header"));
