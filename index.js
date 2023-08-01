
const rollOneMessage = "Oops! Turn score reset to 0!";
const holdMessage = "Turn score added to total score!";
const winMessage = "You win!";
const loseMessage = "You lose!";


let playerScore = 0;
let computerScore = 0;
let playerTurn = true;
let turnScore = 0;
let turn = 0;
let rolls = 0;

const inputElement = document.getElementById("player-name-input");
var player1Name = "";

inputElement.addEventListener("input", (event) => {
  player1Name = event.target.value;
});

function displayWelcomeMessage() {
  const welcomeMessage = `Welcome, ${player1Name}!`;
  console.log(welcomeMessage);
}

window.addEventListener("load", function () {
  var element = document.getElementById("setupPage");
  element.style.display = "none";
});

window.addEventListener("load", function () {
  var element = document.getElementById("gamePage");
  element.style.display = "none";
});

function setupGameButton() {
  // makes id welcome page disappear and makes setup page appear
  document.getElementById("welcomePage").style.display = "none";
  document.getElementById("setupPage").style.display = "block";
}

function startGameButton() {
  // makes id welcome page disappear and makes setup page appear
  document.getElementById("welcomePage").style.display = "none";
  document.getElementById("setupPage").style.display = "none";
  document.getElementById("gamePage").style.display = "block";

  //for testing
  displayWelcomeMessage();

  updateTurnLabel();
}

function updateTurnLabel() {

  const turnLabel = document.getElementById("turn-label");
  turnLabel.innerText = `${player1Name}'s turn`;
}

function clickRollButton() {
  let rollValue1 = rollDice();
  let rollValue2 = rollDice();
  updateRollLabel(rollValue1, rollValue2);
  showDice(rollValue1 , true);
  showDice(rollValue2, false);
  updateTurnScore(rollValue1, rollValue2);
}

//Generates a random number between 1 and 6
function rollDice() {
  var randomNumber = Math.floor(Math.random() * 6) + 1;
  return randomNumber;
}

function updateRollLabel(number1, number2) {
  document.getElementById("roll-label").innerText = "You rolled a " + number1 + " and a " + number2 + "!";
}

function updateTurnScore(number1, number2) {
  turnScore += number1 + number2;
  document.getElementById("turn-score-label").innerText = turnScore;
}

function showDice(num, bool) {
  //True for dice 1, false for dice 2

  if (bool) {
    for (let i = 1; i <= 6; i++) {
      if (i == num) {
        document.getElementById("dice" + i).style.display = "flex";
      } else {
        document.getElementById("dice" + i).style.display = "none";
      }
    }
  }

  else {
    for (let i = 1; i <= 6; i++) {
      if (i == num) {
        document.getElementById("dice" + i + "b").style.display = "flex";
      } else {
        document.getElementById("dice" + i + "b").style.display = "none";
      }
    }
  }

  }


