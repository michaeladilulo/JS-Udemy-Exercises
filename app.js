// Dice Roll Function
function diceRoll() {
    let randomDiceRoll = Math.floor(Math.random() * 6) + 1
    console.log(randomDiceRoll)
}
diceRoll()

// Roll dice multiple times
function rollDice(numRolls) {
    for(let i = 0; i < numRolls; i++) {
        diceRoll();
    }
}
rollDice(5); // will roll the dice 5 times