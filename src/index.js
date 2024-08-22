const inquirer = require("inquirer");


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

const prompt = inquirer.createPromptModule();

prompt([
    {
        type: "number",
        name: "dice_size",
        message: "What size dice would you like to roll?"
    }
]).then((answer) => {
    console.log("Raw answer data from promt package is: " + JSON.stringify(answer));
    console.log(rollDice(answer.dice_size))
});