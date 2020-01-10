/*
====================================================
; Title:  Discussion 5.2
; Author: Nicole Forke
; Date:   10 January 2020
; Modified By: Nicole Forke
; Description: ES5 Built-In Functions
;===================================================
*/

/*
  Expected Output:

  --COMPOSERS--
  Last Name: Williams, Genre: Classical, Rating: 10
  Last Name: Goldsmith, Genre: Film Score, Rating: 8
  Last Name: Morricone, Genre: Classical, Rating: 5
  Last Name: Zimmer, Genre: Film Score, Rating: 9

*/

//statement that displays personal header
const header = require('./forke-header.js');
console.log(header.display("Nicole", "Forke", "Discussion 5.2",));

//start program

//create new line
console.log("");

//create array like objects
var composers = [
  {
    firstName:'John',
    lastName:'Williams',
    genre:'Classical',
    rating:10,
  },
  {
    firstName:'Jerry',
    lastName:'Goldsmith',
    genre:'Film Score',
    rating:8,
  },
  {
    firstName:'Ennio',
    lastName:'Morricone',
    genre:'Classical',
    rating:5,
  },
  {
    firstName:'Hans',
    lastName:'Zimmer',
    genre:'Film Score',
    rating:9,
  }
];

//iterating over the array for output
composers.forEach(function(composers) {
  console.log(
    "Last Name: " + composers.lastName + ", Genre: " + composers.genre + ", Rating: " + composers.rating);
});

//end program
