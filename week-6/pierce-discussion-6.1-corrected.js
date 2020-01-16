/*============================================

; Title: Discussion 6.1

; Author: Kimberly Pierce

; Date: 13 January 2020

; Modified By: Nicole Forke

; Description: Objects and Built In Objects with Errors

;===========================================
*/

//create object and define key/value pairs



var myObject = {



 "animal": "dog",



 "car": "sedan",



 "number": 2, //missing comma



 "name": "John",



 "human": "adult",



 "I Can Haz Cheezeburger?": true,



 "links": {



 "link 1": "https://icanhas.cheezburger.com/",



 "link 2": "http://procatinator.com/"



 }



}



//output



console.log("Cats like cheeseburgers:" + " " + myObject["I Can Haz Cheezeburger?"]); //() used instead of []



console.log("There once was a" + " " + myObject.animal + " "+ "named" + " " + myObject.name + " "+ "who owned a" + " " + myObject.car);
