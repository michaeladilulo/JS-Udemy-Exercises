// Average of Numbers
function average(array) {
    return array.reduce((total, accumulator) => total + accumulator) / array.length;
}
average([1, 2, 3]);

// Password Validator: CHALLENGE: Takes in username and password
// also: password.password < 8 || password.indexOf(' ') !== -1 || password.indexOf(username)
function isPasswordValid(username, password) {
  if(password.length < 8 || password.includes(username) || password.includes(' ')) {
     return false;     
  }
  return true;
}
console.log(isPasswordValid('mike12345', 'mikeisgreat'))

isPasswordValid('mike12345', 'mayaisgreat') // should return true
// isPasswordValid('maya12345', 'mayaisgreat'); // should return false

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