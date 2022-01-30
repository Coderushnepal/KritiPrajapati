var body = document.body;
var title = document.createElement("h2");
title.innerHTML = "Expense Tracker";
var container = document.createElement("div");
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

var label = document.createElement("h4");
label.innerHTML = "YOUR BALANCE";
var totalAmount = document.createElement("h1");
totalAmount.id = "balance";
var incomeExpenseContainer = document.createElement("div");
incomeExpenseContainer.className = "income-expense-container clearfix";

var historyTitle = document.createElement("h3");
historyTitle.innerHTML = "History";

var historyList = document.createElement("ul");
historyList.className = "list";
historyList.id = "list";

var formTitle = document.createElement("h3");
formTitle.innerHTML = "Add new transaction";
var form = document.createElement("form");
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
var transactions = [{
    label: "INCOME",
    id: "income-amount",
    class: "income amount",
    style: "float:left; text-align : center; width:50%; border-right: 1px solid #dedede;",
    color: "#2ecc71",
}, {
    label: "EXPENSE",
    id: "expense-amount",
    class: "expense amount",
    style: "float:right; text-align : center; width:50%;",
    color: "#c0392b",

}];

transactions.forEach(function(value) {
    var transaction = document.createElement("div");
    transaction.style = value.style;
    incomeExpenseContainer.appendChild(transaction);
    var transactionTitle = document.createElement("h4");
    transactionTitle.innerHTML = value.label;
    var transactionAmount = document.createElement("p");
    transactionAmount.id = value.id;
    transactionAmount.style.color = value.color;
    transactionAmount.style.margin = "5px 0";
    transactionAmount.style.fontSize = "20px";
    transactionAmount.style.letterSpacing = "1px";
    transactionAmount.className = value.class;
    transaction.appendChild(transactionTitle);
    transaction.appendChild(transactionAmount);
})

var incomeAmount = document.getElementById('income-amount');
var expenseAmount = document.getElementById('expense-amount');

var formControls = [{
    label: "Text",
    type: "text",
    id: "text",
    placeholder: "Enter text...",

}, {
    label: `Amount <br> (negative-expense , positive - income)`,
    type: "number",
    id: "amount",
    placeholder: "Enter amount",
}];

formControls.forEach(function(value) {
    var formControl = document.createElement('div');
    formControl.classname = "form-control";

    var titleLabel = document.createElement('label');
    titleLabel.innerHTML = value.label;

    var inputField = document.createElement('input');
    inputField.setAttribute('type', value.type);
    inputField.id = value.id;
    inputField.placeholder = value.placeholder;

    var smallDispaly = document.createElement('small');
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
    smallDispaly.style = `
        color: #e74c3c;
    `;
});

var btnTransaction = document.createElement('button');
btnTransaction.className = "btn";
btnTransaction.innerHTML = "Add Transaction";
form.appendChild(btnTransaction);

btnTransaction.style = `
    cursor: pointer;
    background-color: #9c88ff;
    box-shadow: var(--box-shadow);
    color: #fff;
    border: 0;
    display: block;
    font-size: 16px;
    margin: 10px 0 30px;
    padding: 10px;
    width: 100%;
`;



var incomeBlnc = 0;
var expenseBlnc = 0;
var totalBlnc = 0;

totalAmount.innerHTML = `Rs. ${totalBlnc}`;
incomeAmount.innerHTML = `Rs. ${incomeBlnc}`;
expenseAmount.innerHTML = `Rs. ${expenseBlnc}`;
var i = 1;

btnTransaction.addEventListener("click", function(event) {
    event.preventDefault();
    var text = document.getElementById('text');
    var amount = document.getElementById('amount');
    var errorText = document.getElementById('error-text');
    var errorAmount = document.getElementById('error-amount');
    var textValidated = requiredValidator(text, errorText);
    var amountValidated = requiredValidator(amount, errorAmount);

    //text validation
    if (textValidated) {
        errorText.style.visibility = "hidden";
        text.style.borderColor = 'black';

    }
    //amount validation
    if (amountValidated) {
        errorAmount.style.visibility = "hidden";
        amount.style.borderColor = 'black';
    }

    if (textValidated && amountValidated) {

        var historyItem = document.createElement('li');
        historyItem.className = "history-item";
        historyItem.innerHTML = text.value;
        var historyItemSpan = document.createElement('span');
        historyItemSpan.innerHTML = amount.value;
        var deleteBtn = document.createElement('button');
        deleteBtn.className = "delete-btn";
        deleteBtn.innerHTML = "X";
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

        historyItemSpan.style = `float:right;`;

        deleteBtn.style = `
            cursor: pointer;
            background-color: #e74c3c;
            border: 0;
            color: #fff;
            font-size: 20px;
            line-height: 20px;
            padding: 2px 5px;
            position: absolute;
            top: 50%;
            left: 0;
            opacity: 0;
            transform: translate(-100%, -50%);
        `;

        if (amount.value < 0) {
            expenseBlnc += parseInt(amount.value);
            expenseAmount.innerHTML = "Rs. " + (expenseBlnc * -1);
            historyItem.style.borderRight = "5px solid #c0392b";

        } else {
            incomeBlnc += parseInt(amount.value);
            incomeAmount.innerHTML = "Rs. " + incomeBlnc;
            historyItem.style.borderRight = "5px solid #2ecc71";
        }
        totalBlnc += parseInt(amount.value);
        console.log(totalBlnc);
        totalAmount.innerHTML = `Rs. ${totalBlnc}`;

        historyItem.addEventListener("mouseover", function() {
            deleteBtn.style.opacity = 1;
        })
        historyItem.addEventListener("mouseout", function() {
            deleteBtn.style.opacity = 0;
        })


        deleteBtn.addEventListener("click", function(e) {
            // console.log(parseInt(e.target.parentElement.querySelector('span').innerHTML));
            value = parseInt(e.target.parentElement.querySelector('span').innerHTML);
            if (value < 0) {
                expenseBlnc -= value;
                expenseAmount.innerHTML = "Rs. " + expenseBlnc;
            } else {
                incomeBlnc -= value;
                incomeAmount.innerHTML = "Rs. " + incomeBlnc;
                historyItem.style.borderRight = "5px solid #2ecc71";
            }
            totalBlnc -= value;
            totalAmount.innerHTML = `Rs. ${totalBlnc}`;
            e.target.parentElement.remove();
        });
        text.value = "";
        amount.value = "";
    }
});

function requiredValidator(inputField, errorHolder) {
    if (inputField.value === "") {
        errorHolder.style.visibility = "visible";
        errorHolder.innerHTML = `${inputField.id} is required `;
        inputField.style.borderColor = 'red';
        return false;
    }
    return true;
}