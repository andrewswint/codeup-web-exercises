"use strict";
//
// console.log("Hello from external JavaScript");
//
// alert("Welcome to my Website!");
//
// prompt("What is your favorite color?");
// alert("That's great, my favorite color is green!");


//---------problem 1---------------
// var little = prompt("How long would you rent The Little Mermaid for $3 a day?");
// little = parseInt(little);
//
// var bear = prompt("How long would you rent Brother Bear for $3 a day?");
// bear = parseInt(bear);
//
// var herc = prompt("How long would you rent Hercules for $3 a day?");
// herc = parseInt(herc);
//
// alert("Ok, you will spend " + (little + bear + herc) * 3);
//
// //--------------problem 2------------
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

//-------------problem 3-----------------
// var classFull = confirm ("Is your class full?");
// var scheduleConflict = confirm("Is there a schedule conflict?");
// console.log(classFull);
// console.log(scheduleConflict);
// var enroll= !scheduleConflict && !classFull;
// console.log(enroll);



//-------------problem 4--------------------
var username = "codeup";
var password = "notastrongpassword";

var thatWorks = password.length >= 5 && !password.includes(username) && username.length < 20 && !username.startsWith(" ") && !password.startsWith(" ") && !username.endsWith(" ") && !password.endsWith(" ");

console.log(thatWorks);





