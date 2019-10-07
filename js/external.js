"use strict";
//
// console.log("Hello from external JavaScript");
//
// alert("Welcome to my Website!");
//
// prompt("What is your favorite color?");
// alert("That's great, my favorite color is green!");


//---------problem 1---------------
//You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much will you have to pay?


// var little = prompt("How long would you rent The Little Mermaid for $3 a day?");
// little = parseInt(little);
//
// var bear = prompt("How long would you rent Brother Bear for $3 a day?");
// bear = parseInt(bear);
//
// var herc = prompt("How long would you rent Hercules for $3 a day?");
// herc = parseInt(herc);
//
// alert("Ok, you will spend $" + (little + bear + herc) * 3);

// //--------------problem 2------------
// Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.

// var google = prompt("How many hours did you work at Google this week?");
// google = parseInt(google) * 400;
//
// var amazon = prompt("How many hours did you work at Amazon this week?");
// amazon = parseInt(amazon) * 380;
//
// var facebook = prompt("How many hours did you work at Facebook this week?");
// facebook = parseInt(facebook) * 350;
//
// alert("Great job! You made $" + (facebook + amazon + google) + "!");

// -------------problem 3-----------------
// A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with her current schedule.

// var classFull = confirm ("Is your class full?");
// var scheduleConflict = confirm("Is there a schedule conflict?");
// // console.log(classFull);
// // console.log(scheduleConflict);
// var enroll= !scheduleConflict && !classFull;
// alert(enroll);

//------------problem 4----------------------
// A product offer can be applied only if a person buys more than 2 items, and the offer has not expired. Premium members do not need to buy a specific amount of products.

// var shopping = prompt("How many items in your cart?");
// // var cart = parseInt(shopping);
// // var valid = confirm("Is the offer valid?");
// // var premium = confirm("Are you a premium member?");
// // var applies = (cart > 2 || premium === true) && valid === true;
// //
// // alert(applies);



//-------------problem 5--------------------
//Create a variable that holds a boolean value for each of the following conditions:
//
// the password must be at least 5 characters
// the password must not include the username
// the username must be no more than 20 characters
// neither the username or password can start or end with whitespace

// var username = prompt("Please enter a username.");
// var password = prompt("Please enter a password?");
//
// var thatWorks = password.length >= 5 && !password.includes(username) && username.length <= 20 && !username.startsWith(" ") && !password.startsWith(" ") && !username.endsWith(" ") && !password.endsWith(" ");
// alert(thatWorks);