let display = document.querySelector("#display");
let entry = document.querySelector("#entry");
let displayButton = document.querySelector("#displayButton");

displayButton.addEventListener("click", sentToDisplay);

function sentToDisplay() {
  display.textContent = entry.value;
}

let expenseBtn = document.querySelector("#expenseBtn");
let incomeBtn = document.querySelector("#incomeBtn");

let expenseDiv = document.querySelector(".expenses");
let incomeDiv = document.querySelector(".income");

expenseBtn.addEventListener("click", addExpense);
incomeBtn.addEventListener("click", addIncome);

function addExpense() {
  let newDiv = document.createElement("div");
  let newContent = document.createTextNode("Expense");

  newDiv.appendChild(newContent);
  expenseDiv.appendChild(newDiv);
}

function addIncome() {
  let newDiv = document.createElement("div");
  let newContent = document.createTextNode("Income");

  newDiv.appendChild(newContent);
  incomeDiv.appendChild(newDiv);
}

// Task Manager