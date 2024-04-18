#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter Your Sentence to Count the Word: "
    }
]);
const words = answer.Sentence.trim().split(" ");
console.log(words);
console.log(` Your Sentence word count is ${words.length}`);
