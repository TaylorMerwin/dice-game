"use strict";
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
//Event listener for window load to hide setup and game pages
window.addEventListener("load", function () {
    setupPageElement.style.display = "none";
    gamePageElement.style.display = "none";
});
//Event listener for setup page button
setupPageButton.addEventListener("click", function () {
    welcomePageElement.style.display = "none";
    setupPageElement.style.display = "block";
});
//Event listener for start game button
startGameButton.addEventListener("click", function () {
    setupPageElement.style.display = "none";
    gamePageElement.style.display = "block";
});
//Event listener for roll dice button
rollDiceButton.addEventListener("click", rollDice);
function rollDice() {
    let diceRoll = Math.floor(Math.random() * 6) + 1;
    console.log(diceRoll);
    return diceRoll;
}
