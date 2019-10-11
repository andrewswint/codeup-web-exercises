"use strict";
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

// oct 11
function quotient (n1 , n2) {
    if (typeof n1 === "number" && typeof n2 === "number") {
        return n1 / n2;
    } else {
        return false
    }
}

console.log(quotient(4,2));