let playerName = "";

let playerScore = 0;
let computerScore = 0;
let playerTurn = true;
let pTurnScore = 0;
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
}

//Generates a random number between 1 and 6
function rollDice() {
  var randomNumber = Math.floor(Math.random() * 6) + 1;
  return randomNumber;
}

function updateRollLabel(number) {
  document.getElementById("roll-label").innerText = "You rolled a " + number;
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
