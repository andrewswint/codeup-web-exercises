//problem 2
// var i = 1;
// while (i < 65535) {
//     console.log(i * 2);
//     i*=2;
// }


//problem 3
// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;
// This expression will generate a random number between 1 and 5


do {
    var conesWanted = Math.floor(Math.random() * 5) + 1;
    // console.log("i have " + allCones);
    // console.log("i sold " + sold);
    // console.log("i have sold " + (allCones -= sold));
    // console.log(allCones);
    // if (allCones > sold) {
    //     console.log("I sold " + sold);
    // } else if (allCones === 0) {
    //     console.log("yay");
    // } else if (allCones < sold) {
    //     console.log("sorry i only have " + allCones)
    // }

    if(conesWanted <= allCones){
        allCones -= conesWanted;
        console.log("I just sold" + conesWanted);
    }else{
        console.log("I don't have " + conesWanted);
    }
} while (allCones > 0);
console.log("yay");
