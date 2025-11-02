// 1. Declare three variables x, y, and z in a single line, assign them values 10, 20, 30 and log their sum.
let x= 10,y=20,z= 30;
console.log("1st Question Answer: ",x,y,z)

//2. Predict the output:
let a = 5 + "5";
let b = "5" - 2;
console.log("2nd Question Answer: ",a, b);

//3. Check if a number is even or odd using the ternary operator.
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("3rd Question: ");
const num = Number(prompt("Enter a number"));
console.log(num %2 === 0 ? "Even" : "Odd");