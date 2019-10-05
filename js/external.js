"use strict";
//
// console.log("Hello from external JavaScript");
//
// alert("Welcome to my Website!");
//
// prompt("What is your favorite color?");
// alert("That's great, my favorite color is green!");

var little = prompt("How long would you rent The Little Mermaid for $3 a day?");
parseInt(little);
var bear = prompt("How long would you rent Brother Bear for $3 a day?");
parseInt(bear);
var herc = prompt("How long would you rent Hercules for $3 a day?");
parseInt(herc);

console.log("Ok, you will spend " + (little + bear + herc)*3);