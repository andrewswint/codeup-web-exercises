const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];


// Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.
const userLanguages = users.filter(function (user){
    return (user.languages.length >= 3)
});
console.log(userLanguages);

//Use .map to create an array of strings where each element is a user's email address
const userEmail = users.map(function(email){
    return email.email
});
console.log(userEmail);

//Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.

const totalYears = users.reduce(function(total, more){
    return total + more.yearsOfExperience;
}, 0);

let average = totalYears / users.length;

console.log(totalYears);
console.log(average);

// Use .reduce to get the longest email from the list of users.

const longEmail = userEmail.reduce(function(biggest, currentEmail){
    if (currentEmail.length < biggest.length) {
        return biggest;
    } else {
        return currentEmail;
    }
}, '');

console.log(longEmail);

//Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.

let names = users.map(function(name){
    return name.name
});

const oneLine = names.reduce(function(currentName, newName) {
    return `${currentName} ${newName}`;
}, "Your instructors are:") +  ".";

console.log(oneLine);

//Use .reduce to get the unique list of languages from the list of users.

let listOfLang = Array.from(users.reduce((accumulator, user) => {
    user.languages.map(language => accumulator.add(language));
    return accumulator
}, new Set()));

console.log(listOfLang);