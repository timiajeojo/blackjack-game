let firstCard = 10
let secondCard = 11
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""

if (sum < 20) {
    message= "do you want to draw a new card? 🙂";
} else if (sum === 21) {
    message = "Wohoo! You've got Blackjack! 🥳";
    hasBlackJack = true
} else if (sum > 21) {
    message = "You're out of the game! 😭";
    isAlive = false
}

console.log(message);

function startGame() {
    
}