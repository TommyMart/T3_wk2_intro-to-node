// const inquirer = require("inquirer");


// To start the app enter 'npm run dev' in the terminal

console.log("Dicer roller app is running!");

/**
 * Generate a random number between 1 and diceSize
 * @param {number} diceSize Max dice can roll
 * @returns {number} The number rolled on dice
 */
function rollDice(diceSize = 20){
    let diceResult = 0;


    diceResult = Math.ceil(Math.random() * diceSize);

    return diceResult;
}

// console.log("Random dice roll result is: " + rollDice());

// const prompt = inquirer.createPromptModule();

// try {
//     prompt([
//         {
//             type: "number",
//             name: "dice_size",
//             message: "What size dice would you like to roll?"
//         }
//     ]).then((answer) => {
//         console.log("Raw answer data from promt package is: " + JSON.stringify(answer));
//         console.log(rollDice(answer.dice_size))
//     }).catch((error) => {
//         console.log("Error from dot-catch block");
//         console.log(error);
//     })
// } 

const prompt = require('prompt-sync')({sigint: true});

let userWantsToRepeatApp = true;

let diceRollHistory = [];

do {

    try {
        let userDiceSize = prompt('What size dice do you wanna roll? ');
        // check if user entered a number
        if (isNaN(userDiceSize)) {
        throw new Error("User did not enter a number");
    }   
    
        // Check if number is valid (eg. 1 or greater, whole numbers)
        let userInputAsNumber = parseInt(userDiceSize);
        if (userInputAsNumber < 1 ) {
            throw new Error("User entered an invalid number.")
        }
        diceRollHistory.push(rollDice(userInputAsNumber));
        console.log(diceRollHistory[diceRollHistory.length - 1]);

        if (diceRollHistory.length > 10) {
            diceRollHistory.shift();
        }

    } catch (error) {
        console.log("Error occured!");
        console.log(error.message);
    } finally {
        let doesUserWantToRepeat = prompt("Roller another dice? Y/N ");
        if (doesUserWantToRepeat[0].toLocaleLowerCase() == "n") {
            userWantsToRepeatApp = false;
        }
    }
} while (userWantsToRepeatApp);

console.log("Full dice roll history:\n" + JSON.stringify(diceRollHistory));



