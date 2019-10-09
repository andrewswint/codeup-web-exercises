"use strict";

console.log("hello from conditionals lec.js!");

// ================ REAL WORLD SCENARIO ================
// If a user is an admin,show a specific navbar 
// If weather is rainy, show rain icon
// If number of lives is 0, game is over


// ================ IF STATEMENT SYNTAX ================

// if(condition){
    // code here runs if condition evaluates to true
// }
    

// ================ IF STATEMENT EXAMPLES ================
//Together: Show a specific navbar if user is admin

// if(isAdmin) {
// //    show specific navbar
// }

//Together: Send a 20% off coupon if its users birthday

// if (isBirthday) {
// //    send 20% off email
// }

//Together: Write an if statement that alerts "It's raining" if isRainy is true

// var isRainy = true;
// if (isRainy) {
//     alert("It's raining");
// }

//Together: Write an if statement that alerts the user whether or not they have enough money to buy a new item. Assume there are no hidden fees or taxes.

// var itemCost = 100;
// var currentBalance = 200;
//
// if (itemCost < currentBalance) {
//     alert("you can afford it")
// }


// //TODO: Write an if statement that alerts "Sorry, game over" if numberOfLives is 0
//
// function lives (num) {
//     if (num === 0) {
//         alert("Sorry, game over");
//     }
// }
// lives(0);
//
// //TODO: Write an if statement that alerts "It's snowing!" if weather is equal to "snowing"
// function snowing (weather) {
//     if (weather === "snowing") {
//         alert("It's snowing!");
//     }
// }
//
// snowing("snowing");
// //TODO: Write an if statement that alerts true if numberInput is greater than but not equal to 10
//
// function numberInput(num) {
//      if (num > 10) {
//       alert("That's a big number")
//      }
// }
//
// numberInput(11);
//
// //TODO: EXTRA BONUS - Refactor each of the previous statements as functions.





// =============== IF / ELSE SYNTAX ================

// if(condition){
//     // code here runs if condition evaluates to true
// } else {
//     // code here runs if condition evaluates to false
// }
    
    

// =============== IF / ELSE STATEMENT EXAMPLES ================
//Together: Show a specific navbar if user is admin, else show a different navbar
// var isAdmin = true;
// if(isAdmin) {
//     //show admin nav
//     alert("user is admin");
// } else {
//     //show reg nav
//     alert("user is a regular user");
// }

//Together: Write an if statement that alerts "It's raining" if isRainy is true, else return "have a nice day!"
// var isRainy = true;
// if(isRainy){
//     alert("its raining");
// } else {
//     alert("have a nice day");
// }



//TODO: Write an if statement that alerts "Sorry, game over" if numberOfLives is 0, else alert "Next Level!"

// var num = 0;
//     if (num === 0) {
//         alert("sorry game over");
//     } else {
//         alert("next level");
//     }
//
// //TODO: Write an if statement that alerts "It's snowing!" if weather is equal to "snowing", else alert "Check back later for more details!"
//
// function weather (checking) {
//     if (checking === "snowing") {
//         alert("its snowing");
//     } else {
//         alert("check back later for more details")
//     }
// }
//
// weather("snowing");
//
// //TODO: Write an if statement that alerts true if numberInput is greater than 10, else alert "the number is less than 10"
//
// function numberInput (num) {
//     if (num > 10) {
//         alert(true)
//     } else {
//         alert("the number is less than 10")
//     }
// }
// numberInput(9);
//
// //TODO: Refactor todo#1 as a function named checkIfGameIsOver, that accepts numberOfLives and returns "Sorry, game over" if numberOfLives is 0, else return "Next Level!.
//
// function gameOver (num) {
//     if (num === 0) {
//         return "sorry game over";
//     } else {
//         return "next level";
//     }
// }
// console.log(gameOver(1));


//TODO: EXTRA BONUS - Refactor todo#2 from above as a function.

    
    
// SHOULD WE DELETE STUFF EXAMPLE

// var weShouldDeleteStuff = confirm('Are you sure you want to delete everything?');
//
// console.log("The value of the confirm is: " + weShouldDeleteStuff);
//
// if (weShouldDeleteStuff) {
//     // delete all the things...
//     alert("We are deleting everything...");
// } else {
//     alert("Operation Canceled!");
// }


//TODO: Write a confirm asking the user if they are 13 years of age or older. If they are, alert "You may proceed", if they are not, alert "Sorry, you are not able to proceed"

// var userInput = confirm("are you 13 or older?");
// function age (input) {
//     if (input === true) {
//         alert("you may proceed");
//     } else {
//         alert("sorry, you are not able to proceed");
//     }
// }
//  age(userInput);


// ================ IF / ELSE IF / ELSE STATEMENT SYNTAX ===============
// if(condition1){
//     // code here runs if condition evaluates to true
// }else if (condition2){
//     // code here runs if condition1 is false *and* condition2 evaluates to true
// }else {
//     // code here gets executed if condition1 nor condition2 evaluate to true
// }

    

// =============== IF / ELSE IF/ELSE STATEMENT EXAMPLES ================
//Together: Write an if/else if/else statement that alerts "It's snowing!" if weather is equal to "snowing", alerts "It's raining" if weather is equal to "raining", alerts "have a nice day" for all other cases

// function checkWeather (input) {
//     if (input === "snowing") {
//         alert("its snowing");
//     } else if (input === "raining") {
//         alert("its raining");
//     } else {
//         alert("have a nice day");
//     }
// }
// checkWeather("snowing");

//Together: refactor the above statement as a function

// Together: PIZZA PREFERENCE EXAMPLE 

// var pizzaPreference = prompt("What kind of pizza do you like?");
// console.log("User pizza input: " + pizzaPreference);
//
// if (pizzaPreference === "pineapple and hot sauce") {
//     alert("What a coincidence, that's my favorite!");
// } else if (pizzaPreference === "cheese") {
//     alert("Just plain cheese? Okay...");
// }  else if (pizzaPreference === "ham"){
//     alert("Ham is easy to spell and awesome!");
// } else {
//     alert(pizzaPreference + " isn't my favorite, but let's order some!");
// }




//TODO: Write a function that accepts a string that is a traffic light color as an input. When this function is called, it should return a message informing the user what to do when approaching that color light at an intersection.

function trafficLight (color) {
    if (color === "green") {
        return ("go");
    } else if (color === "slow") {
        return ("yellow");
    } else if (color === "red") {
        return ("stop");
    } else {
        return ("i dont know");
    }
}

console.log(trafficLight("blinking"));


// ================ NESTED STATEMENTS ===============
//Together: If user is under 15, they are not eligible for a learners permit, else they are. If they are eligible, check age. If they are 15 they are eligible for a learners permit, if they are 16 or older and have a permit, they are eligible for license, if they are 16 or older and do not have a permit, they are not eligible for a license.
var age = 16;
var hasPermit = true;
if (age < 15) {
    alert("not eligible");
} else {
    if (age === 15) {
        alert("permit");
    }else if (age >= 16 && hasPermit) {
        alert("license")
    }else if (age >= 16 && !hasPermit) {
        alert("you need a permit");
    }
}


// ================ TERNARY STATEMENT ================

//Together: Regular way

// var message;
// var success = true;
//
// if (success) {
//     message = "Operation was successful.";
// } else {
//     message = "Oops, something went wrong.";
// }
// console.log(message);


// var success = true;
// var message = (success) ? "Operation was successful from tern." : "Oops, something went wrong from tern.";
// console.log(message)


//TODO: Refactor the following conditional as a ternary

// var weather = "sunny";
// var weatherMessage;

// if(weather === "rainy"){
//    weatherMessage = "It's raining!";
// } else {
//     weatherMessage = "Have a nice day!";
// }

//WRITE YOUR TERNARY STATEMENT HERE!



// =============== SWITCH STATEMENT ================
//Together:

// var pizzaPreference = prompt("What kind of pizza do you like?");
//
// switch(pizzaPreference) {
//     case "pineapple and hot sauce":
//         alert("What a coincidence, that's my favorite!");
//         break;
//     case "cheese":
//         alert("Just plain cheese? Okay...");
//         break;
//     default:
//         alert(pizzaPreference + " isn't my favorite, but let's order some!");
//         break;
// }


//TODO: Write a switch statement that evaluates weather as the condition. Check for "rainy", "sunny", "snow", and a default case.


//TODO: Rewrite the intersection function from earlier as a switch statement.



// ================ REVERSE ENGINEERING =================
// Visit each of these links, outline the steps required to achieve each of these demonstrations. You can write code or just write the logic steps that would achieve each output


// 1) https://mdn.github.io/learning-area/javascript/building-blocks/allowance-updater.html


// 2) https://mdn.github.io/learning-area/javascript/building-blocks/simple-else-if.html


// 3) https://mdn.github.io/learning-area/javascript/building-blocks/simple-ternary.html

