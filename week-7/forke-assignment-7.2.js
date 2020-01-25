/*
=========================================================
; Title:  Exercise 7.2
; Author: Nicole Forke
; Date:   24 January 2020
; Modified By: Nicole Forke
; Description: Constructor Functions
;========================================================
*/

/*
  Expected output:

  FirstName LastName
  Exercise 7.2
  Today's Date

  1 Thomas Edison Software Engineer
  2 Benjamin Franklin Programmer
  3 Nikola Tesla Project Manager
  4 Charles Babbage Product Manager
  5 Alexander Bell Business Analyst
*/

//create function of constructor objects

function employee(id, firstName, lastName, title) {
  this.id = id;
  this.firstName = firstName;
  this.lastName = lastName;
  this.title = title;
};

// array of constructor objects

var employee = [
  new employee(1, "Thomas", "Edison", "Software Engineer"),
  new employee(2, "Benjamin", "Franklin", "Programmer"),
  new employee(3, "Nikola", "Tesla", "Project Manager"),
  new employee(4, "Charles", "Babbage", "Product Manager"),
  new employee(5, "Alexander", "Bell", "Business Analyst")
];

// output

for(let i = 0; i < employee.length; i++) {
  console.log(employee[i].id + " " + employee[i].firstName + " " + employee[i].lastName + " " + employee[i].title);
};
