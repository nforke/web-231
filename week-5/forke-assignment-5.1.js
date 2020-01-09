/*
====================================================
; Title:  Discussion 5.1
; Author: Nicole Forke
; Date:   07 January 2020
; Modified By: Nicole Forke
; Description: Advanced Arrays: program using a
; keyed collection of arrays with two errors.
;===================================================
*/

/*
  Expected Output:

  The sky is blue!
  The grass is green!
  The flower is blooming!
  The day is warm!
  The summer is here!
*/

//statement that displays personal header
const header = require('./forke-header.js');
console.log(header.display("Nicole", "Forke", "Discussion 5.1",));

//start program

//create new line
console.log("");

//create new map
var nature = new Map();
  nature.set('sky', 'blue');
  nature.set('grass', 'green');
  nature.set(flower, blooming);
  nature.set('day', 'warm');
  nature.set('summer', 'here');

//call the key and value of the new map
for (var(key, value) of nature) {
  console.log('The ' + key + ' is ' + value + '!');
}

//end program
