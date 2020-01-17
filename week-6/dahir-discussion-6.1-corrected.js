/*

============================================

; Title: Assignment 6.1

; Author: Zach Dahir

; Date: 1-16-20

; Modified by: Nicole Forke

; Description: Discussion post, objects containing two errors

;===========================================

*/

/*Expected Output

Zach Dahir is 23 years old, and lives in Omaha

Jake Dahir is 26 years old, and lives in Omaha

Josh Dahir is 30 years old, and lives in Bellevue

Sarah Dahir is 31 years old, and lives in Omaha

*/



//constructor function for person object that takes three parameters

function person(name, age, city){

     this.name = name,

     this.age = age,

     this.city = city

};



//creating new person instances

var zach = new person("Zach Dahir", 23, "Omaha");



var jake = new person("Jake Dahir", 26, "Omaha");



var josh = new person("Josh Dahir", 30, "Bellevue");



var sarah = new person("Sarah Dahir", 31, "Omaha");



//output name, age and city

console.log(zach.name + " is " + zach.age + " years old, and lives in " + zach.city);



console.log(jake.name + " is " + jake.age + " years old, and lives in " + jake.city);



console.log(josh.name + " is " + josh.age + " years old, and lives in " + josh.city);



console.log(sarah.name + " is " + sarah.age + " years old, and lives in " + sarah.city);



//end program
