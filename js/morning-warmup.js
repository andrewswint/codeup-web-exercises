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



