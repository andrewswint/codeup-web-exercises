// Write a function named wait that accepts a number as a parameter, and returns a promise that resolves after the passed number of milliseconds.

let wait = function (num) {
    return new Promise((resolve, reject) =>{
    setTimeout( function(){
        resolve();
    }, num);
    });
};
wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));

// Create a function that accepts a GitHub username, and returns a promise that resolves with the date of the last commit that user made.

// let username = "andrewswint";
// let date;
// let userName = fetch(`https://api.github.com/users/${username}/events/public`, {headers: {'Authorization': `token ${gitHubToken}`}})
//     .then(data => {
//         data.json().then(secondData=> {
//             date = (secondData[0].created_at)
//         });
//         return date;
//     });

let getLastCommit = (userName) => {
    fetch(`https://api.github.com/users/${userName}/events`, {headers: {'Authorization': `token ${gitHubToken}`}})
        .then(response => response.json())

        .then(usernames => {
            let filter = usernames.filter(user => user.type === "PushEvent");
            console.log(`${userName} last commit was on ` + filter[0].created_at);
            return filter[0];
        });
};
getLastCommit('andrewswint');




