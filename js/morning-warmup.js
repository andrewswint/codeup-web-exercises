// "use strict";
// function day_3(num1, num2) {
//     return num1 + num2;
// }
//
// console.log(day_3(2,2));
// //write a function to find the area of a triangle
// function triangleArea(a,b,c) {
//     var half = (a+b+c)/2;
//     var area = Math.sqrt(half * (half - a) * (half - b) * (half - c));
//     return area;
// }
//
// console.log(triangleArea(5, 6, 7));
//
// //    Sep 23 2019 console.log return hi
// function sayHi () {
//     return "hi"
// }
//
// console.log (sayHi());
//
// //    sep 25 2019
// function hello (name) {
//     if(name) {
//         return "hello "+ name
//     } else {
//         return "hello stranger"
//     }
// }
//
// console.log (hello("Andrew"));
//
// //    sep 26
// function firstElement (array) {
//     return array[0];
// }
//
// console.log (firstElement([1,2,3]));
//
// //    Sep 27
//
// function equalTri(num) {
//     return triangleArea(num,num,num);
// }
//
// console.log(equalTri(3,3,3));
//
// //    Sep 30
// function threeStrings (a,b,c) {
//     return a + " "+  b +  " "+ c;
// }
//
// console.log(threeStrings("You're", "the", "best!"));
//
// //Oct 1
// function returnUpper (value) {
//     return value.toUpperCase();
// }
//
// console.log(returnUpper("hello"));
//
// //    oct 2
// function circleArea (d) {
//     return (.25 * Math.PI * Math.pow(2,d));
// }
//
// console.log(circleArea(5));
//
// //    oct 3
// function perimeterQuad (a,b,c,d) {
//     return a + b + c + d;
// }
//
// console.log(perimeterQuad(3,2,5,7));
//
// //    oct 4
// function typeOf (value) {
//     return typeof(value);
// }
//
// console.log(typeOf("hello"));
//
// //    oct 7
// function posEven (value) {
//     return value % 2 === 0 && value > 0;
// }
//
// console.log(posEven("0"));
//
// //    oct 8
// function greaterThan5 () {
//     var number = parseInt(prompt("please enter a number"));
//     return number > 5;
// }
//
// console.log(greaterThan5());

// oct 9
// function helloThere (string = "stranger") {
//     return "hello there, " + string + ".";
//
// }
// var promptedResponse = prompt("input string");
// alert(helloThere(promptedResponse));
// console.log(arrLength([1,"a",3,4,"hello"]));

// oct 10
// function arrLength(array){
//     return array.length;
// }
// // console.log(arrLength([1,"a",3,4,"hello"]));

// oct 11
// function quotient (n1 , n2) {
//     if (typeof n1 === "number" && typeof n2 === "number") {
//         return n1 / n2;
//     } else {
//         return false
//     }
// }
//
// console.log(quotient(4,2));


// //oct 15
// function array (five) {
//     console.log(five);
//     console.log(five[0]);
//     console.log(five[1]);
//     console.log(five[2]);
//     console.log(five[3]);
//     console.log(five[4]);
// }
// console.log(array([1,2,3,4,5]));

//oct 17

// function strlength (string) {
//     return typeof string === "string" && string.length >= 8;
// }
//
// console.log(strlength(("123456789")));

//oct 18

// function pointNum (num) {
//     if (!isNaN(parseFloat(num))) {
//         return Math.floor(num);
//     } else {
//         return false;
//     }
// }
//
// console.log(pointNum(Math.PI));

//oct 21

// function count(num) {
//     for (var i = 1; i <= num; i++) {
//         console.log(i)
//     }
//     return "done";
// }

//oct 23

// function createPersonalObject (x, y) {
//     var personObject = {};
//     personObject.name = x;
//     personObject.age = y;
//     return personObject;
// }
//
// console.log(createPersonalObject("andrew", 31));


//oct 24
// for(var x = 1; x <= 100; x++) {
//     if (x % 15 === 0) {
//         console.log("FizzBuzz");
//     } else if (x % 5 === 0) {
//         console.log("Buzz");
//     } else if (x % 3 === 0) {
//         console.log("Fizz");
//     } else
//         console.log(x);
// }

//oct 25

// function strFive (str) {
//     if (typeof str === "string" && parseFloat(str) === 5) {
//         return parseFloat(str);
//     } else {
//         return "NO!"
//     }
// }
//
// console.log(strFive('4'));

//oct 28

// var shoppingCarts = [
//     {
//         apples: 8,
//         bananas: 2,
//         oranges: 4,
//         grapes: 24
//     }, {
//         apples: 3,
//         bananas: 6,
//         oranges: 8,
//         grapes: 12
//     } , {
//         apples: 0,
//         bananas: 12,
//         oranges: 0,
//         grapes: 0
//     } , {
//         apples: 4,
//         bananas: 0,
//         oranges: 12,
//         grapes: 10
//     }
// ];
// function mostOranges (carts) {
//     var winner = carts[0];
//     carts.forEach(function (cart){
//         if (cart.oranges > winner.oranges) {
//             winner = cart
//         }
//     });
//     return winner;
// }
//
// console.log(mostOranges(shoppingCarts));

//oct 29
//
// var students = [
//     {
//         name: "Mary",
//         grade: 10,
//         gpa: 3.7,
//         isRegistered: true
//     },
//     {
//         name: "Tim",
//         grade: 12,
//         gpa: 3.2,
//         isRegistered: false
//     },
//     {
//         name: "Ellie",
//         grade: 9,
//         gpa: 4.0,
//         isRegistered: false
//     },
//     {
//         name: "Alex",
//         grade: 10,
//         gpa: 3.9,
//         isRegistered: true
//     }
// ];
//
// function registered (arr) {
//     var bucket = [];
//     arr.forEach(function (student) {
//         if (student.isRegistered === false) {
//             bucket.push(student);
//         }
//     });
//     return bucket;
// }
//
// console.log(registered(students));

//oct 30

// var hamsters = [
//     {
//         name: "Hamtaro",
//         heightInMM: 86,
//         fur: ['orange', 'white'],
//         gender: "male",
//         dateOfBirth: "August 6"
//     } , {
//         name: "Bijou",
//         heightInMM: 75,
//         fur: ['white'],
//         gender: "female",
//         dateOfBirth: "July 10"
//     } , {
//         name: "Oxnard",
//         heightInMM: 100,
//         fur: ['grey', 'white'],
//         gender: "male",
//         dateOfBirth: "May 3"
//     } , {
//         name: "Boss",
//         heightInMM: 120,
//         fur: ['brown', 'white'],
//         gender: "male",
//         dateOfBirth: "Spetember 21"
//     } , {
//         name: "Snoozer",
//         heightInMM: 85,
//         fur: ['brown', 'white', "pink"],
//         gender: "male",
//         dateOfBirth: "January 14"
//     }
// ];
//
// function hamsterHeight(arr) {
//     return arr.sort(function (a,b){
//        return a.heightInMM - b.heightInMM;
//     });
// }
//
// console.log(hamsterHeight(hamsters));

// nov 4
// function numToString(num){
//     switch (num){
//         case 1:
//             return 'one';
//         case 2:
//             return 'two';
//         case 3:
//             return 'three';
//         case 4:
//             return 'four';
//         case 5:
//             return 'five';
//         case 6:
//             return 'six';
//         case 7:
//             return 'seven';
//         case 8:
//             return 'eight';
//         case 9:
//             return 'nine';
//         case 10:
//             return 'ten';
//         default:
//             return false;
//     }
// }
// var randomNumber = Math.floor(Math.random() * 10) + 1;
// console.log(numToString(randomNumber));

//nov 5
// var myObject = {
//    gratitude: "Thank you"
// };
//
// function sayWelcome (obj) {
//     if (obj.gratitude === "Thank you") {
//         return "Your Welcome"
//     }
// }
//
// console.log(sayWelcome(myObject));

// nov 6

// function randomB () {
//     var i = Math.floor(Math.random() * 2);
//     return i === 1;
// }
//
// console.log(randomB());

//nov 8

// make a sandwich
//
// wake up-
//     get out of bed
// snooze alarm
// go to kitchen
// go to cabenet
// open cabinet
// retrieve bread
// close cabinet
// go to counter
// put bread on counter
// go to cabinet
// open counter
// retrieve peanut butter
// close cabinet
// move to counter
// put the peanut butter on the counter
// open fridge
// retrieve the jelly
// close fridge
// put the jelly on the counter
// open drawer
// retrieve a knife
// close drawer
// put the knife down
// retireive plate
// put plate on counter
// pick up the bread
// open the bread
// pull out a slice of bread
// put slice of bread on plate
// pull out a slice of bread
// put slice of bread on plate
// pick up peanut butter
// open peanut butter
// put lid down
// put peanut butter down
// pick up knife
// scoop peanut butter
// pick up slice of bread
// spread peanut butter
// put bread down on plate
// pick up jelly
// open jelly
// put lid down
// put jelly down
// pick up knife
// scoop jelly
// pick up slice of bread
// spread jelly
// put bread down on plate
// pick up slice of bread * 2
// join slices of bread
// put sandwich down

//nov 12

// var arr = [1,2,3,4,5,6,7,8];
// var even = function (arr) {
//   var bucket = [];
//   arr.forEach(function (num){
//       if (num % 2 === 0) {
//           bucket.push(num)
//       }
//       return bucket
//   });
//     console.log(bucket);
// };
//
// even(arr);

var numbers = [1, 2, 3, 4, 5, 6, 7, 8];

var evens = numbers.filter(function(n) {
    return n % 2 === 0;
});
console.log(evens);






