let display = document.querySelector("#display");
let entry = document.querySelector("#entry");
let displayButton = document.querySelector("#displayButton");

displayButton.addEventListener("click", sentToDisplay);

function sentToDisplay() {
  display.textContent = entry.value;
}
