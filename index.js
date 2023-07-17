window.addEventListener("load", function () {
  var element = document.getElementById("setupPage");
  element.style.display = "none";
});

window.addEventListener("load", function () {
  var element = document.getElementById("gamePage");
  element.style.display = "none";
});

function myClick() {
  // makes id welcome page disappear and makes setup page appear
  document.getElementById("welcomePage").style.display = "none";
  document.getElementById("gamePage").style.display = "block";
}

function clickRollButton() {
  let rollValue = rollDice();
  updateRollLabel(rollValue);
}

//Generates a random number between 1 and 6
function rollDice() {
  var randomNumber = Math.floor(Math.random() * 6) + 1;
  return randomNumber;
}

function updateRollLabel(number) {
  document.getElementById("roll-label").innerText = "You rolled a " + number;
}
