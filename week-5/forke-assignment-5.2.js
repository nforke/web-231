/*
====================================================
; Title:  Exercise 5.2
; Author: Nicole Forke
; Date:   10 January 2020
; Modified By: Nicole Forke
; Description: ES5 Built-In Functions
;===================================================
*/

/*
  Expected Output:

  FirstName LastName
  Exercise 5.2
  Today's Date

  Yogurt
  Chicken
  Fish
  Spaghetti
  Tiramisu
*/

//statement that displays personal header
const header = require('./forke-header.js');
console.log(header.display("Nicole", "Forke", "Exercise 5.2",));

//start program

//create new line
console.log("");

//create string array
var favFood = ["Yogurt", "Chicken", "Fish", "Spaghetti", "Tiramisu"];

//iterating the array for output
favFood.forEach(function(favFood) {
  console.log(favFood)
});

//end program
