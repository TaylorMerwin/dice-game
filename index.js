<<<<<<< HEAD
import { Player } from "./Player.js";
=======
"use strict";
var _a;
>>>>>>> refs/remotes/origin/main
//Web Page Sections
const welcomePageElement = document.getElementById("welcomePage");
const setupPageElement = document.getElementById("setupPage");
const gamePageElement = document.getElementById("gamePage");
//User Input Elements
const p1NameInput = document.getElementById("player1-name-input");
const p2NameInput = document.getElementById("player2-name-input");
//Button Elements
const setupPageButton = document.getElementById("setupPageButton");
const startGameButton = document.getElementById("startGameButton");
const rollDiceButton = document.getElementById("rollDiceButton");
const holdDiceButton = document.getElementById("holdDiceButton");
//Label Elements
<<<<<<< HEAD
let rollMessageElement = document.getElementById("roll-label");
let player1Label = document.getElementById("player1-label");
let player2Label = document.getElementById("player2-label");
let turnLabel = document.getElementById("turn-label");
//Global Variables
let player1Name = "";
let player2Name = "";
//Create 2 player objects
//Create player objects
let player1 = new Player(player1Name);
let player2 = new Player(player2Name);
=======
let rollMessageElement = (_a = document.getElementById("roll-label")) === null || _a === void 0 ? void 0 : _a.innerText;
//Event listener for window load to hide setup and game pages
window.addEventListener("load", function () {
    setupPageElement.style.display = "none";
    gamePageElement.style.display = "none";
});
>>>>>>> refs/remotes/origin/main
//Event listener for setup page button
setupPageButton.addEventListener("click", function () {
    welcomePageElement.style.display = "none";
    setupPageElement.style.display = "block";
    console.log("Setup Page Button Clicked");
});
//Event listener for player 1 name input
p1NameInput.addEventListener("input", function (event) {
    if (event.target instanceof HTMLInputElement) {
        player1Name = event.target.value;
        player1.name = player1Name;
    }
});
//Event listener for player 2 name input
p2NameInput.addEventListener("input", function (event) {
    if (event.target instanceof HTMLInputElement) {
        player2Name = event.target.value;
        player2.name = player2Name;
    }
});
//Event listener for start game button
startGameButton.addEventListener("click", startGameAction);
//Event listener for roll dice button
rollDiceButton.addEventListener("click", rollDiceAction);
//Action to occur when roll dice button is clicked
function rollDiceAction() {
    let diceRoll1 = Math.floor(Math.random() * 6) + 1;
    let diceRoll2 = Math.floor(Math.random() * 6) + 1;
    updateRollMessage(diceRoll1, diceRoll2);
    showDice(diceRoll1, true);
    showDice(diceRoll2, false);
}
//Action to occur when start game button is clicked
function startGameAction() {
    //Hide setup page and show game page
    setupPageElement.style.display = "none";
    gamePageElement.style.display = "block";
<<<<<<< HEAD
    //Set initial turn label
    updateTurnLabel(player1);
    //Update the player name labels with input from setup page
    updatePlayerLabels(player1, player2);
}
function updatePlayerLabels(Player1, Player2) {
    player1Label.innerText = Player1.name + ": " + Player1.score;
    player2Label.innerText = Player2.name + ": " + Player2.score;
}
function updateTurnLabel(Player) {
    turnLabel.innerText = Player.name + "'s Turn";
}
function updateRollMessage(die1, die2) {
    if (rollMessageElement) {
        if (die1 === 1 && die2 === 1) {
            rollMessageElement.innerText = "Snake Eyes! Get Fucked!";
        }
        else if (die1 === 1 || die2 === 1) {
            rollMessageElement.innerText =
                "One of your dice was a 1. No points for you!";
        }
        else {
            rollMessageElement.innerText =
                "You rolled a " + die1 + " and a " + die2 + "!";
        }
    }
}
//Updates the visible dice to match the rolled values
function showDice(num, bool) {
    //True for dice 1, false for dice 2
    if (bool) {
        for (let i = 1; i <= 6; i++) {
            if (i == num) {
=======
});
//Event listener for roll dice button
rollDiceButton.addEventListener("click", rollDice);
function updateRollMessage(die1, die2) {
    rollMessageElement = "You rolled a " + die1 + " and a " + die2 + "!";
    rollMessageElement += "\nWould you like to roll again?";
}
function rollDice() {
    let diceRoll1 = Math.floor(Math.random() * 6) + 1;
    let diceRoll2 = Math.floor(Math.random() * 6) + 1;
    updateRollMessage(diceRoll1, diceRoll2);
    showDice(diceRoll1, true);
    showDice(diceRoll2, false);
}
//Updates the visible dice to match the rolled values
function showDice(die, bool) {
    //True for dice 1, false for dice 2
    if (bool) {
        for (let i = 1; i <= 6; i++) {
            if (i == die) {
>>>>>>> refs/remotes/origin/main
                document.getElementById("dice" + i).style.display = "flex";
            }
            else {
                document.getElementById("dice" + i).style.display = "none";
            }
        }
    }
    else {
        for (let i = 1; i <= 6; i++) {
<<<<<<< HEAD
            if (i == num) {
=======
            if (i == die) {
>>>>>>> refs/remotes/origin/main
                document.getElementById("dice" + i + "b").style.display = "flex";
            }
            else {
                document.getElementById("dice" + i + "b").style.display = "none";
            }
        }
    }
}
