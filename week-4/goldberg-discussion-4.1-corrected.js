/*

============================================

; Title: Assignment 4.1

; Author: Mike Goldberg

; Date: 12/16/2019

; Modified By: Mike Goldberg

; Description: Discussion Board: Find 2 errors in the code below

;===========================================

*/


// start program


/*

    expected output:

    '1 for the money',

    '2 for the show',

    '3 to get ready',

    '4 now go cat go!'

*/


// variable declaration

var lineNumber = 1;

var blueSuedeShoes = "for the money.for the show.to get ready.now go cat go!";


// Split string into an array and output the line number 

function lyrics(song) {

    var editedSong = song.split(".");

    editedSong.forEach( line => {

        console.log(`${lineNumber} ${line}`);

        lineNumber++;

    });

}


// output

lyrics(blueSuedeShoes);


//  end program