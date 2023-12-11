
// Write your code here
let num1 = 31;
let num2 = 2;

// Challenge 1: Create a variable called 'multiply' that multiplies num1 and num2 to equal 62.
let multiply = num1 * num2;

// Challenge 2: Create a variable called 'random' that generates a random integer greater than 0.
let random = Math.floor(Math.random() * 100) + 1; // Generating a random number between 1 and 100

let num3 = 10;
let num4 = 6;

// Challenge 3: Create a variable called 'mod' that calculates the remainder of dividing num3 by num4, which should be 4.
let mod = num3 % num4;

// Challenge 4: Create a variable called 'max' that finds the highest number in a set, the value returned should be 20.
let max = Math.max(5, 10, 15, 20, 5);

// Exporting variables for testing purposes (in case of testing in Node.js)
module.exports = {
  multiply,
  random,
  mod,
  max
};
