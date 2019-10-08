function multiplication (x,y) {
    return x * y;
}

var division = function (x,y){
    return x / y;
};

console.log(multiplication(2,2));

console.log(division(4,2));

function isOdd (num) {
    return num % 2 !== 0;
}

console.log(isOdd(2));

function isEven (num) {
    return num % 2 === 0
}

console.log(isEven(2));

function identify(input) {
    return input
}

console.log(identify("string"));

// function isFive () {
//     var number =parseInt(prompt("enter a number"));
//     return number === 5
// }
//
// console.log(isFive());