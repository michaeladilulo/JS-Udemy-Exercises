// Return random playing card
function pickRandomPlayingCardValues(array) {
    const randomCardValue = Math.floor(Math.random() * array.length);
    return array[randomCardValue]
}

function getRandomPlayingCard() {
    const cardValues = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
    const cardSuits = ['Spades', 'Hearts', 'Diamonds', 'Clubs'];
    const randomCardValue = pickRandomPlayingCardValues(cardValues);
    const randomCardSuit = pickRandomPlayingCardValues(cardSuits);

    console.log({value: randomCardValue, suit: randomCardSuit})

    return {
        value: randomCardValue,
        suit: randomCardSuit
    }
}
getRandomPlayingCard()

// Pangram: Contains every letter of the alphabet
function isPangramSentence(sentence) {
    let convertSentenceToLowerCase = sentence.toLowerCase();

    for (let char of 'abcdefghijklmnopqrstuvwxyz') {
        if(convertSentenceToLowerCase.indexOf(char) === -1) {
            return false;
        }
    }
    return true;
}
isPangramSentence('The five boxing wizards jump quickly')

// Average of Numbers
function average(array) {
    return array.reduce((total, accumulator) => total + accumulator) / array.length;
}
average([1, 2, 3]);

// Password Validator: CHALLENGE: Takes in username and password
// also: password.password < 8 || password.indexOf(' ') !== -1 || password.indexOf(username) !== -1
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