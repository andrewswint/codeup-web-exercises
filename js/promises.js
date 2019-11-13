// Write a function named wait that accepts a number as a parameter, and returns a promise that resolves after the passed number of milliseconds.

let wait = function (num) {
    return new Promise((resolve, reject) =>{
    setTimeout( function(){
        resolve();
    }, num);
    });
};
// wait(1000).then(() => console.log('You\'ll see this after 1 second'));
// wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));

// Create a function that accepts a GitHub username, and returns a promise that resolves with the date of the last commit that user made. Reference the github api documentation to achieve this.

let username = "andrewswint";

let userName = fetch(`https://api.github.com/users/${username}/events/public`, {headers: {'Authorization': `token ${gitHubToken}`}})
    .then(response => {
        return response.json().PromiseValue[0].created_at
    });

console.log(userName);





