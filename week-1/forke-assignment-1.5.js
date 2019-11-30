/*
======================================
;Title: Assignment 1.5
;Author: Nicole Forke
;Date: 30 November 2019
;Modified By: Nicole Forke
;Description: Types, Values, Variables
======================================
*/

//start program

/*
    ;Expected Output:
    ;This program should display the contents
    ;of each variable with the proper value and format
    ;within the JavaScript code.
*/

//variable declaration for first employee:

var firstName1 = "Name: Theresa";
var lastName1 = "Smith";
var address1 = "Address: 1110 S 15th Street";
var payRate1 = 15.75;
var hireDate1 = new Date(2011, 05, 06);

//variable declaration for second employee:
var firstName2 = "Name: Judy";
var lastName2 = "Jones";
var address2 = "Address: 2650 N Adams Street";
var payRate2 = 10.50;
var hireDate2 = new Date(2019, 09, 01);

//variable declaration for third employee:
var firstName3 = "Name: Jen";
var lastName3 = "May";
var address3 = "Address: 905 E Lincoln Avenue";
var payRate3 = 12.50;
var hireDate3 = new Date(2019, 00, 06);

//variable declaration for text strings on pay rate and hire date
var hireDate = "Hire Date:";
var payRate = "Pay Rate:";

//output with format for payRate and hireDate

console.log(firstName1, lastName1);
console.log(payRate, "$", (payRate1.toFixed(1)));
console.log(hireDate, (hireDate1.toLocaleDateString('en-US')));

console.log(firstName2, lastName2);
console.log(payRate, "$", (payRate2.toFixed(1)));
console.log(hireDate, (hireDate2.toLocaleDateString('en-US')));

console.log(firstName3, lastName3);
console.log(payRate, "$", (payRate3.toFixed(1)));
console.log(hireDate, (hireDate3.toLocaleDateString('en-US')));

//end program