/*
=========================================================
; Title:  Exercise 5.3
; Author: Nicole Forke
; Date:   10 January 2020
; Modified By: Nicole Forke
; Description: Object Collections using Arrays
;========================================================
*/

/*
  Expected output:

  FirstName LastName
  Exercise 5.3
  Today's Date

  -- COMPOSERS --
  Last Name: Beethoven, Genre: Classical, Rating: 8
  Last Name: Mozart, Genre: Classical, Rating: 10
  Last Name: Bach, Genre: Classical, Rating: 9
  Last Name: Haydn, Genre: Classical, Rating: 6
  Last Name: Schubert, Genre: Classical, Rating: 5
*/


//statement that displays personal header
const header = require('./forke-header.js');
console.log(header.display("Nicole", "Forke", "Exercise 5.3",));

//start program

//create new line
console.log("");

//create array like objects
var composers = [
  {
    firstName:'Ludwig Van',
    lastName:'Beethoven',
    genre:'Classical',
    rating:8,
  },
  {
    firstName:'Wolfgang Amadeus',
    lastName:'Mozart',
    genre:'Classical',
    rating:10,
  },
  {
    firstName:'Johann Sebastian',
    lastName:'Bach',
    genre:'Classical',
    rating:9,
  },
  {
    firstName:'Joseph',
    lastName:'Haydn',
    genre:'Classical',
    rating:6,
  },
  {
    firstName:'Franz',
    lastName:'Schubert',
    genre:'Classical',
    rating:5,
  }
];

//variable declaration
var title = "--COMPOSERS--";

//variable output
console.log(title);

//iterating over the array for output
composers.forEach(function(composer) {
  console.log(
    "Last Name: " + composer.lastName + ", Genre: " + composer.genre + ", Rating: " + composer.rating);
});

//end program
