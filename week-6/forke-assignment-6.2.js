/*
=========================================================
; Title:  Exercise 6.2
; Author: Nicole Forke
; Date:   16 January 2020
; Modified By: Nicole Forke
; Description: Exception Handling
;========================================================
*/

/*
  Expected output:

  FirstName LastName
  Exercise 6.2
  Today's Date

  Catch clause: <your custom message goes here>
  Finally clause reached...
*/

//statement that displays personal header
const header = require('./forke-header.js');
console.log(header.display("Nicole", "Forke", "Exercise 6.2",));

//start program

//create objects and define key/value pairs
var employee = {
  userId:"jSmith",
  password:5020,
};

//insert space after header
console.log(" ");

//throw an error
try {
  if(employee.userId !== 5021) {
    throw ("Incorrect Password ");
  };

} catch (err) {
  console.log("Error Occurred " + err);

} finally {
  console.log("reached...")
};

//end program
