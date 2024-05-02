const displayScreen = document.querySelector(".screen");

function resetKey() {
  displayScreen.value = "";
}

function deleteKey() {
  displayScreen.value = displayScreen.value.slice(0, -1);
}

function appendNumber(input) {
  displayScreen.value += input;
}

function showResult() {
  try {
    displayScreen.value = eval(displayScreen.value);
  } catch (error) {
    displayScreen.value = "Error";
  }
}
