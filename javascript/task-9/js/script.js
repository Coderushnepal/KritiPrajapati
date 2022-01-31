let body = document.body;
let title = document.createElement("h2");
title.innerHTML = "Expense Tracker";
let container = document.createElement("div");
container.classList.add("container");

body.appendChild(title);
body.appendChild(container);

body.style = `
    background-color: #f7f7f7;
    font-family: 'Lato', sans-serif;
`;
title.style = `
    margin: 40px;
    text-align: center;`;
container.style = `
    margin: 30px auto;
    width: 350px;
`;

let label = document.createElement("h4");
label.innerHTML = "YOUR BALANCE";
let totalAmount = document.createElement("h1");
totalAmount.id = "balance";
let incomeExpenseContainer = document.createElement("div");
incomeExpenseContainer.className = "income-expense-container clearfix";

let historyTitle = document.createElement("h3");
historyTitle.innerHTML = "History";

let historyList = document.createElement("ul");
historyList.className = "list";
historyList.id = "list";

let formTitle = document.createElement("h3");
formTitle.innerHTML = "Add new transaction";
let form = document.createElement("form");
form.id = "form";

container.appendChild(label);
container.appendChild(totalAmount);
container.appendChild(incomeExpenseContainer);
container.appendChild(historyTitle);
container.appendChild(historyList);
container.appendChild(formTitle);
container.appendChild(form);

totalAmount.style = `letter-spacing: 1px;`;
incomeExpenseContainer.style = `
    background-color: #fff;
    padding: 20px;
    margin: 20px 0;
`;

historyTitle.style = `
    border-bottom: 1px solid #bbb;
    padding-bottom: 10px;
    margin: 40px 0 10px;
`;

historyList.style = `
    list-style: none;
    padding: 0;
    margin-bottom: 40px;
`;

formTitle.style = `
    border-bottom: 1px solid #bbb;
    padding-bottom: 10px;
    margin: 40px 0 10px;
`;
let transactions = [
  {
    label: "INCOME",
    id: "income-amount",
    class: "income amount",
    style:
      "float:left; text-align : center; width:50%; border-right: 1px solid #dedede;",
    color: "#2ecc71",
  },
  {
    label: "EXPENSE",
    id: "expense-amount",
    class: "expense amount",
    style: "float:right; text-align : center; width:50%;",
    color: "#c0392b",
  },
];

transactions.forEach(function (value) {
  let transaction = document.createElement("div");
  transaction.style = value.style;
  incomeExpenseContainer.appendChild(transaction);
  let transactionTitle = document.createElement("h4");
  transactionTitle.innerHTML = value.label;
  let transactionAmount = document.createElement("p");
  transactionAmount.id = value.id;
  transactionAmount.style.color = value.color;
  transactionAmount.style.margin = "5px 0";
  transactionAmount.style.fontSize = "20px";
  transactionAmount.style.letterSpacing = "1px";
  transactionAmount.className = value.class;
  transaction.appendChild(transactionTitle);
  transaction.appendChild(transactionAmount);
});

let incomeAmount = document.getElementById("income-amount");
let expenseAmount = document.getElementById("expense-amount");

let formControls = [
  {
    label: "Text",
    type: "text",
    id: "text",
    placeholder: "Enter text...",
  },
  {
    label: `Amount <br> (negative-expense , positive - income)`,
    type: "number",
    id: "amount",
    placeholder: "Enter amount",
  },
];

formControls.forEach(function (value) {
  let formControl = document.createElement("div");
  formControl.classname = "form-control";

  let titleLabel = document.createElement("label");
  titleLabel.innerHTML = value.label;

  let inputField = document.createElement("input");
  inputField.setAttribute("type", value.type);
  inputField.id = value.id;
  inputField.placeholder = value.placeholder;

  let smallDispaly = document.createElement("small");
  smallDispaly.id = "error-" + value.id;

  form.appendChild(formControl);
  formControl.appendChild(titleLabel);
  formControl.appendChild(inputField);
  formControl.appendChild(smallDispaly);

  titleLabel.style = `
        display: inline-block;
        margin: 10px 0;
    `;
  inputField.style = `
        border: 1px solid #dedede;
        border-radius: 2px;
        display: block;
        font-size: 16px;
        padding: 10px;
        width: 100%;
    `;
  smallDispaly.style = `color: #e74c3c; `;
});

let btnTransaction = document.createElement("button");
btnTransaction.className = "btn";
btnTransaction.innerHTML = "Add Transaction";
form.appendChild(btnTransaction);

btnTransaction.style = `
    cursor: pointer;
    background-color: #9c88ff;
    color: #fff;
    border: 0;
    display: block;
    font-size: 16px;
    margin: 10px 0 30px;
    padding: 10px;
    width: 100%;
`;

let historyItemId = 0;
let transactionsArray = [];
updateItemAmount();

btnTransaction.addEventListener("click", function (event) {
  event.preventDefault();
  let text = document.getElementById("text");
  let amount = document.getElementById("amount");
  let errorText = document.getElementById("error-text");
  let errorAmount = document.getElementById("error-amount");
  let textValidated = requiredValidator(text, errorText);
  let amountValidated = requiredValidator(amount, errorAmount);
  //text validation
  if (textValidated) {
    errorText.style.visibility = "hidden";
    text.style.borderColor = "black";
  }
  //amount validation
  if (amountValidated) {
    errorAmount.style.visibility = "hidden";
    amount.style.borderColor = "black";
  }

  if (textValidated && amountValidated) {
    historyItemId++;
    let transactionItem = {
      id: historyItemId,
      text: text.value,
      amount: amount.value,
    };
    transactionsArray.push(transactionItem);
    addHistoryItem(transactionItem);
    updateItemAmount();
  }
  text.value = "";
  amount.value = "";
});

function requiredValidator(inputField, errorHolder) {
  if (inputField.value === "") {
    errorHolder.style.visibility = "visible";
    errorHolder.innerHTML = `${inputField.id} is required `;
    inputField.style.borderColor = "red";
    return false;
  }
  return true;
}

function addHistoryItem(transactionItem) {
  let historyItem = document.createElement("li");
  historyItem.className = "history-item";
  historyItem.innerHTML = transactionItem.text;

  let historyItemSpan = document.createElement("span");
  historyItemSpan.innerHTML = transactionItem.amount;

  let deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-btn";
  deleteBtn.innerHTML = "X";
  deleteBtn.id = transactionItem.id;

  historyItem.appendChild(historyItemSpan);
  historyList.appendChild(historyItem);
  historyItem.appendChild(deleteBtn);
  historyItem.style = `
    background-color: #fff;
    color: #333;
    position: relative;
    padding: 10px;
    margin: 10px 0;
  `;

  historyItem.style.borderRight = transactionItem.amount < 0 ? "5px solid #c0392b" : "5px solid #2ecc71";

  historyItemSpan.style = `float: right;`;
  deleteBtn.style = `
    cursor: pointer;
    background-color: #e74c3c;
    border: 0;
    color: #fff;
    font-size: 20px;
    line-height: 20px;
    padding: 2px 5px;
    position: absolute;
    top: 50% ;
    left: 0;
    opacity: 0;
    transform: translate(-100% , -50% );
  `;

  historyItem.addEventListener("mouseover",() => (deleteBtn.style.opacity = 1)
  );
  historyItem.addEventListener("mouseout", () => (deleteBtn.style.opacity = 0));

  deleteBtn.addEventListener("click", function (e) {
    const idToBeDeleted = e.target.id;
    transactionsArray = transactionsArray.filter(
      (transactionItem) => transactionItem.id !== parseInt(idToBeDeleted)
    );
    console.log(transactionsArray, idToBeDeleted);
    historyList.innerHTML = "";
    transactionsArray.forEach(addHistoryItem);
    updateItemAmount();
  });
}

function updateItemAmount() {
  let incomeBlnc = 0;
  let expenseBlnc = 0;
  let totalBlnc = 0;

  transactionsArray.forEach((transactionItem) => {
    if (transactionItem.amount < 0) {
      expenseBlnc += parseInt(transactionItem.amount);
    } else {
      incomeBlnc += parseInt(transactionItem.amount);
    }
    totalBlnc += parseInt(transactionItem.amount);
  });
  totalAmount.innerHTML = `Rs. ${totalBlnc}`;
  incomeAmount.innerHTML = `Rs.${incomeBlnc}`;
  expenseAmount.innerHTML = `Rs.${expenseBlnc * -1}`;
}
