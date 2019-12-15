/*
=================================================
; Title:  Exercise 3.4
; Author: Nicole Forke
; Date:   14 December 2019
; Modified By: Nicole Forke
; Description: Loops
;================================================
*/

/*
  // Expected output:

  -- DO THE NUMBERS MATCH GAME --
  6 does not match 4!
  6 does not match 7!
  6 does not match 4!
  6 does not match 8!
  6 does not match 9!
  6 does not match 7!
  6 does match 6!
  6 does not match 3!
*/

/**
 * Params: n/a
 * Response: integer value
 * Description: Returns a random integer value
 * Disclaimer: Do not remove this function as this is what you will be using to generate a random number
 */

 // start program

 // variable
 var x = 6;

// random number function
 function randomNumber() {
  return Math.floor((Math.random() * 10) + 1)
}

 // functions
function match(arg1, arg2) {
  if (arg1 === arg2)
    return true;
  else {
    return false;
  }
}

function logMismatch(arg1, arg2){
  console.log(arg1 + " and " + arg2 + " do not match!");
}

function logMatch(arg1, arg2){
  console.log(arg1 + " and " + arg2 + " do match!");
}

// output
for (let i = 0 ; i < 10 ; i++) {
  random = randomNumber();
if (match(x, random)) {
  logMatch(x, random);
} else {
  logMismatch(x, random);
}
}

// end program
