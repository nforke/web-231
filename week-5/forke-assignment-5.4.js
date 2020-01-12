/*
=========================================================
; Title:  Exercise 5.4
; Author: Nicole Forke
; Date:   12 January 2020
; Modified By: Nicole Forke
; Description: Filtering/Reducing Complex Data Structures
;========================================================
*/

/*
  FirstName LastName
  Assignment 5.4
  Today's Date

  -- COMPOSER BY RATING --
  Rating: 8
  Composer: Beethoven

  Rating: 10
  Composer: Mozart

  Rating: 9
  Composer: Bach

  Rating: 6
  Composer: Haydn

  Rating: 5
  Composer: Schubert

  -- COMPOSER BY GENRE --
  Genre: Classical
  Composer: Beethoven

  Genre: Classical
  Composer: Mozart

  Genre: Classical
  Composer: Bach

  Genre: Classical
  Composer: Haydn

  Genre: Classical
  Composer: Schubert
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

//variable declaration and output for title
var title = "--COMPOSER BY RATING--";

console.log(title);

//composers by rating
let ratingsLastName = composers.map(function(composer) {
  return composer.rating + "\n" + "Composer: " + composer.lastName;
});

ratingsLastName.forEach(function(rating) {
  console.log("Rating: " + rating + "\n");
});

//variable declaration and output for title
var title2 = "--COMPOSER BY GENRE--";

console.log(title2);

//composers by genre
let genreLastName = composers.map(function(composer) {
  return composer.genre + "\n" + "Composer: "+ composer.lastName;
});

genreLastName.forEach(function(genre) {
  console.log("Genre: " + genre + "\n");
});

//end program
