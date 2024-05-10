const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the 
// string and add them to the end.
//Hint - define another variable to hold the new string or reassign the 
// new string to str.
const firstThree = str.slice(0, 3);
// const newStr = str.slice(3) + firstThree;
// console.log(newStr);
//Use a template literal to print the original and modified string in 
// a descriptive phrase.

const newStr = `${str.slice(3)}${firstThree}`
console.log(`The original string is ${str}`);
console.log(`The new string is ${newStr}`);

//2) Modify your code to accept user input. Query the user to enter the 
// number of letters that will be relocated.
// const userInput = input.question("Enter a number of letters that will be relocated: ")
// console.log(userInput);
// const newStr = `${str}`
// const personalizedString = `${str.slice(userInput)}${newStr}`
// console.log(personalizedString);
const question = "How many letters would you like to relocate?"
let userInput = " "

userInput = input.question(question);


//3) Add validation to your code to deal with user inputs that are
//  longer than the word. In such cases, default to moving 3 characters.
//  Also, the template literal should note the error.
if(userInput >= 11){
console.log("NOT ACCEPTABLE")
}