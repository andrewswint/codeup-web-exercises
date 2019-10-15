"use strict";
/*
* WHILE LOOPS
*/

// 1. Create a while loop that counts to 100 in increments of ten:
// (10...20...30...)

// var i = 0;
// while (i <=100) {
//     console.log(i);
//     i+=10
// }

// 2. Create a while loop that counts backwards from 50 - 1
// var i = 50;
// while (i >= 1) {
//     console.log (i);
//     i--
// }



// 3. Create a while loop that asks the user for a confirmation when asked: "Would you like to exit?"
// Store the confirm in the myQuestion variable.
// Try running this. What happens?
// var myQuestion = true;
// while (!myQuestion) {
//     myQuestion = confirm("please hit ok");
// }


/*
* DO-WHILE LOOPS
*/


// 4. Refactor question 3 using a do-while loop.
// What is the behavior this time?
// do {
//     myQuestion = confirm("please hit ok")
// } while (!myQuestion);
// 5. Create a do-while loop that prompts the user for a color and continues

// do {
//     var stop = "blue";
//     var pick = prompt("pick a color");
// }while (stop !== pick);

// to prompt until the string passed is "blue"

// 6. Refactor question 1 using a do-while loop.
// var i = 10;
// do {
//     console.log(i);
//     i+=10
// } while (i <= 100);

/*
* FOR LOOPS
*/

var myArray = ["apples", "oranges", "bananas", "grapes", "pineapples"];

// 7. Create a for loop that iterates over this array and logs out each
// element to the console
// for (var i = 0; i < myArray.length; i++) {
//     console.log(myArray[i])
// }

// 8. You are going to use a for loop to complete the FizzBuzz exercise.
// Your program should count up to 100.
// For numbers divisible by 3, log "Fizz"
// For numbers divisible by 5, log "Buzz"
// If divisible by 3 and 5, log "FizzBuzz"
// All other cases, just log the number.
// for (var x = 1; x <= 100; x++) {
//     if (x % 3 === 0 && x % 5 === 0) console.log("FizzBuzz");
//     else if (x % 5 === 0) console.log("Buzz");
//     else if (x % 3 === 0) console.log("Fizz")
//     else console.log(x)
// }


// 9. Refactor question 1 using a for-loop
// for (var x = 10; x <= 100; x+=10) {
//     console.log(x);
// }

// 10. Write a for-loop


/*
* BREAK AND CONTINUE
*/

// 11. Refactor question 1: using a 'break', stop the counting once it hits 70.
// var i = 10;
// do {
//     console.log(i);
//     i+=10;
//     if (i === 80) {
//         break;
//     }
// } while (i <= 100);


// 12. Refactor question 2: using a 'continue', skip numbers 50-26 and only
// log 25 - 1.


var i = 50;
while (i >= 1) {
    if (i > 26){
    i--;
    continue;
    }
    console.log(i);
    i--;
}
