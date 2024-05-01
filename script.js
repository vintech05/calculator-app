const displayScreen = document.querySelector(".display-screen");
const keys = document.querySelectorAll(".key");

keys.forEach((key) => {
  key.addEventListener("click", () => {
    if (key.innerText === "RESET") {
      displayScreen.innerText = "";
    } else if (key.innerText === "DEL") {
      displayScreen.innerText = displayScreen.innerText.slice(0, -1);
    } else if (key.innerText === "=") {
      displayScreen.innerText = eval(displayScreen.innerText);
    } else {
      displayScreen.innerText += key.innerText;
    }
  });
});
