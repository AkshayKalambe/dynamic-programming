//const readline = require('readline').createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
//
// readline.question('Who are you?', name => {
//   console.log(`Hey there ${name}!`);
//   readline.close();
// });

// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
//
// });
//
// readline.question('Enter the string', string =>{
//     console.log(string);
//     readline.close();
// });
const prompt = require('prompt-sync')({sigint: true});

// Random number from 1 - 10
const numberToGuess = Math.floor(Math.random() * 10) + 1;
// This variable is used to determine if the app should continue prompting the user for input
let foundCorrectNumber = false;

while (!foundCorrectNumber) {
    // Get user input
    let guess = prompt('Guess a number from 1 to 10: ');
    // Convert the string input to a number
    guess = Number(guess);

    // Compare the guess to the secret answer and let the user know.
    if (guess === numberToGuess) {
        console.log('Congrats, you got it!');
        foundCorrectNumber = true;
    } else {
        console.log('Sorry, guess again!');
        console.log('Correct number was' + numberToGuess)
    }
}
