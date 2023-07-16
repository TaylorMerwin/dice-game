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
