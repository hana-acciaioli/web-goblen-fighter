/* Imports */
import { renderMonster } from './render-monsters.js';
import { getRandomItem } from './util.js';

/* Get DOM Elements */
const scoreboardDisplay = document.getElementById('scoreboard');
const messageDisplay = document.getElementById('message');

const playerHP = document.getElementById('player-hp');
const playerImage = document.getElementById('player-image');

const monsterList = document.getElementById('monster-list');

const playerAttacks = [0, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 5];
const monsterAttacks = [0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4];

/* State */
let player = {
    hp: 10,
    type: 'hero',
};

let message = 'Add new creepsters and fight them';

let monstersKilled = 0;

let monsters = [
    {
        name: 'Poopsy',
        type: 'bat',
        hp: 2,
    },
    {
        name: 'Woopsy',
        type: 'ghost',
        hp: 4,
    },
];

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

function displayScoreboard() {
    scoreboardDisplay.textContent = `You have slain ${monstersKilled} monsters`;
}

function displayMonsters() {
    monsterList.innerHTML = '';

    for (const monster of monsters) {
        const monsterEl = renderMonster(monster);
        monsterList.append(monsterEl);

        monsterEl.addEventListener('click', () => {
            if (monster.hp < 1) {
                message = 'Please leave the sad ghost alone.';
                displayMessage();
                return;
            }

            const playerAttack = getRandomItem(playerAttacks);
            const monsterAttack = getRandomItem(monsterAttacks);

            player.hp = Math.max(0, player.hp - monsterAttack);
            monster.hp = Math.max(0, monster.hp - playerAttack);

            message = '';
            if (playerAttack === 0) {
                message += 'you missed. ';
            } else {
                message += `You hit ${monster.name} and did ${playerAttack} in damage.`;
            }

            if (monsterAttack === 0) {
                message += `${monster.name} missed you.`;
            } else {
                message += `${monster.name} hit you and did ${monsterAttack} in damage`;
            }
            if (monster.hp < 1) {
                monstersKilled++;
                displayScoreboard();
            }
            displayMessage();
            displayPlayer();
            displayMonsters();
        });
    }
}
// (don't forget to call any display functions you want to run on page load!)
displayPlayer();
displayMessage();
displayScoreboard();
displayMonsters();
