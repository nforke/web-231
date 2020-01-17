/*
=========================================================
; Title:  Exercise 6.3
; Author: Nicole Forke
; Date:   16 January 2020
; Modified By: Nicole Forke
; Description: Object Literals
;========================================================
*/

/*
  Expected output:

  FirstName LastName
  Exercise 6.3
  Today's Date

  {id: 101, name: Help Desk Support, requester: Bob Jones}
*/

//statement that displays personal header
const header = require('./forke-header.js');
console.log(header.display("Nicole", "Forke", "Exercise 6.3",));

//start program

//insert space after header
console.log(" ");

//create objects and define key/value pairs
var customer = {
  id:502,
  name:"Customer Support",
  requestor:"Jane Doe",

/*
;retrieve object values with getter method
;change object values with setter method
*/
  get userId() {
    return customer.id;
},

  set userId(value) {
    this.id = value;
},

  get userName() {
    return customer.name;
  },

  set userName(value) {
    this.name = value;
  },

  get userRequestor() {
    return customer.requestor;
  },

  set userRequestor(value) {
    this.requestor = value;
  },
};

//new values executed with setter method
customer.userId = 101;

customer.userName = "Help Desk Support";

customer.userRequestor = "Bob Jones";

//output
console.log("{id:" + " " + customer.userId + "," + " " + "name:" + " " + customer.userName + "," + " " + "requestor:" + " " + customer.userRequestor + "}");

//end program
