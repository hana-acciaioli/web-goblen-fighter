/* Imports */

/* Get DOM Elements */
// const scoreboard = document.getElementById('scoreboard');
const messageDisplay = document.getElementById('message');

const playerHP = document.getElementById('player-hp');
const playerImage = document.getElementById('player-image');

/* State */
let player = {
    hp: 10,
    type: 'hero',
};

let message = 'Add new monsters and fight them';

/* Events */

/* Display Functions */
function displayPlayer() {
    playerHP.textContent = Math.max(0, player.hp);
    if (player.hp < 1) {
        playerImage.src = 'assets/headstone.png';
    } else if (player.hp < 5) {
        playerImage.src = 'assets/jack-o-lantern-sad.png';
    } else {
        playerImage.src = 'assets/jack-o-lantern.png';
    }
}

function displayMessage() {
    messageDisplay.textContent = message;
}
// (don't forget to call any display functions you want to run on page load!)
displayPlayer();
displayMessage();
