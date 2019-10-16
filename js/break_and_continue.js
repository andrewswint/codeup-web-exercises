// var y;
// for (var x = 0; x <= 50; x++) {
//     y = parseFloat(prompt("enter a odd number between 1-50"));
//     if (y % 2 !== 0 && y >0) {
//         console.log("your number is " + y);
//         break;
//     }
// }

while (true) {
    var y = parseFloat(prompt("enter a odd number between 1-50"));
    if (y % 2 !== 0 && y >0) {
        console.log("your number is " + y);
        break;
    }
}
for (var a = 1; a <= 50; a+=2) {
    if (a === y) {
        console.log("yikes your number was " + a);
        continue;
    }
    console.log(a + " is odd");
}


