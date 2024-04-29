#! /usr/bin/env node


import inquirer from "inquirer";

// 1) computer will generate a random number

// 2)  user input for guessing number

// 3)   compare user's input with computer generated number and show result

const randomNumber = Math.floor(Math.random() * 6 + 1);
console.log("Welcome to Number guessing game")


const answers = await inquirer.prompt([
{
    name:  "userGuessedNumber",
    type:  "number",
    message:"Please Guess a number 1-6",
},
]);
if(answers.userGuessedNumber === randomNumber ){
    console.log("congratulations! You Guessed right number.");
} else {
     console.log("OOh! You Guessed Wrong Number");
}