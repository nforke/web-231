/*
=========================================================
; Title:  Exercise 6.4
; Author: Nicole Forke
; Date:   16 January 2020
; Modified By: Nicole Forke
; Description: Nested Object Literals
;========================================================
*/

/*
  Expected output:

  FirstName LastName
  Assignment 6.4
  Today's Date

  Ticket 105 was created on <today' date> and assigned to employee Bob Jones (Programmer I).
*/

//statement that displays personal header
const header = require('./forke-header.js');
console.log(header.display("Nicole", "Forke", "Exercise 6.4",));

//start program

//insert space after header
console.log(" ");

//create objects literals and define key/value pairs
var ticket = {
  id:105,
  name:"Bob Jones",
  dateCreated:"January 16, 2020",
  priority:1,

  person: {
    id:100,
    firstName:"Bob",
    lastName:"Jones",
    jobTitle:"Programmer I",
  }
};

//output
console.log("Ticket " + ticket.id + " " + "was created on " + ticket.dateCreated + " " + "and assigned to employee " + ticket.person.firstName + " " +
ticket.person.lastName + " " + "(" + ticket.person.jobTitle + ")" + ".");

//end program
