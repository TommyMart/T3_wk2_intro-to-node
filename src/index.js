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

console.log("Random dice roll result is: " + rollDice());
