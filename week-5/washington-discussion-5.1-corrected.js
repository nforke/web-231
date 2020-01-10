 /*

============================================

; Title: Discussion-5.1

; Author: Mozilla.org

; Date:   8 January 2020

; Modified by: Verlee Washington

; Description: Create a keyed collection with 2 errors to debug.

;===========================================

*/
// Start program

// A simple key/value map object

var greetings = new Map();



// Creating sets

greetings.set ('America', 'hello');

greetings.set ('France', 'allo');

greetings.set ('Mexico', 'hola');

greetings.set ('Hawaii', 'aloha');



// For loop to iterate and return the key/value array

for (var [key, value] of greetings) {

  console.log("In " + key  + ' some people say ' + value + " as a greeting.");

}

// End program
