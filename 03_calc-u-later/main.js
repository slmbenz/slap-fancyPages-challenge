// Query DOM elements once
var output = document.getElementById("output");
var numButtons = document.querySelector(".numbtns");
var opsButtons = document.querySelector(".opsbtns");
var resetButton = document.getElementById("reset");

// Event delegations
numButtons.addEventListener("click", function(event) {
  if (event.target.matches("div")) {
    pushToOutput(event.target.innerText);
  }
});

opsButtons.addEventListener("click", function(event) {
  if (event.target.matches("div")) {
    pushToOutput(event.target.title);
  }
});

document.getElementById("equals").addEventListener("click", calculate);

resetButton.addEventListener("click", function(event) {
  event.preventDefault();
  reset();
});

function pushToOutput(value) {
  if (value === "C") {
    reset();
  } else {
    output.innerText += value;
  }
}

function calculate() {
  try {
    output.innerText = eval(output.innerText);
  } catch (error) {
    output.innerText = "Error: " + error.message;
  }
}

function reset() {
  output.innerText = "";
}
