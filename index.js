let playerName = "";
let rollOneMessage = "Oops! Turn score reset to 0!";
let holdMessage = "Turn score added to total score!";
let winMessage = "You win!";
let loseMessage = "You lose!";


let playerScore = 0;
let computerScore = 0;
let playerTurn = true;
let turnScore = 0;
let turn = 0;
let rolls = 0;


window.addEventListener("load", function () {
  var element = document.getElementById("setupPage");
  element.style.display = "none";
});

window.addEventListener("load", function () {
  var element = document.getElementById("gamePage");
  element.style.display = "none";
});

function startGameButton() {
  // makes id welcome page disappear and makes setup page appear
  document.getElementById("welcomePage").style.display = "none";
  document.getElementById("gamePage").style.display = "block";
  document.getElementByClassName("dice-container").style.visibility = "hidden";
}

function clickRollButton() {
  let rollValue = rollDice();
  updateRollLabel(rollValue);
  showDice(rollValue);
  updateTurnScore(rollValue);
}

//Generates a random number between 1 and 6
function rollDice() {
  var randomNumber = Math.floor(Math.random() * 6) + 1;
  return randomNumber;
}

function updateRollLabel(number) {
  document.getElementById("roll-label").innerText = "You rolled a " + number;
}

function updateTurnScore(number) {
  turnScore += number;
  document.getElementById("turn-score-label").innerText = turnScore;
}

function showDice(num) {
  for (let i = 1; i <= 6; i++) {
    if (i == num) {
      document.getElementById("dice" + i).style.display = "flex";
    } else {
      document.getElementById("dice" + i).style.display = "none";
    }
  }
}
