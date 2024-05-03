const displayScreen = document.querySelector(".screen");
const modalBox = document.querySelector(".modal-box");
const modalOverlay = document.querySelector(".modal-overlay");
const themeBtn = document.querySelector(".switch");
const radioTiles = document.querySelectorAll(".radio-tile");
const radioInput = document.querySelectorAll(".radio-input");

function openModal() {
  modalBox.style.display = "block";
  modalOverlay.style.display = "block";
}

function closeModal() {
  modalBox.style.display = "none";
  modalOverlay.style.display = "none";
  console.log("modal closed");
}

modalOverlay.addEventListener("click", (e) => {
  const modalWindow = modalBox.getBoundingClientRect();
  const modalX = e.clientX - modalWindow.left;
  const modalY = e.clientY - modalWindow.top;

  if (
    modalX < 0 ||
    modalX > modalWindow.width ||
    modalY < 0 ||
    modalY > modalWindow.height
  ) {
    closeModal();
  }
});

radioTiles.forEach((radioTile) => {
  radioTile.addEventListener("click", () => {
    if (radioTile.classList.contains("toggle-theme-1")) {
      document.body.classList.remove("theme-2", "theme-3");
      document.body.classList.add("theme-1");
    } else if (radioTile.classList.contains("toggle-theme-2")) {
      document.body.classList.remove("theme-1", "theme-3");
      document.body.classList.add("theme-2");
    } else if (radioTile.classList.contains("toggle-theme-3")) {
      document.body.classList.remove("theme-1", "theme-2");
      document.body.classList.add("theme-3");
    }
  });
});

function resetKey() {
  displayScreen.value = "";
}

function deleteKey() {
  displayScreen.value = displayScreen.value.slice(0, -1);
}

function appendNumber(input) {
  if (displayScreen.value.length > 15) {
    displayScreen.style.fontSize = "1.5rem";
    displayScreen.value += input;
  } else {
    displayScreen.value += input;
    displayScreen.style.fontSize = "2.5rem";
  }
}

function showResult() {
  try {
    displayScreen.value = eval(displayScreen.value);
  } catch (error) {
    displayScreen.value = "Error";
  }
}

themeBtn.addEventListener("click", openModal);
