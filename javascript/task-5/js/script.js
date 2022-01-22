var body = document.body;
var mainWrapper = document.createElement('div');
body.appendChild(mainWrapper);
var container = document.createElement('div');
container.classList.add("container");
var form = document.createElement('form');
form.classList.add("form");
form.id = "form";
mainWrapper.appendChild(container);
container.appendChild(form);

mainWrapper.style = `
padding-top: 100px;
    min-width: 700px;
    font-size: 16px;
    font-family:  'Open Sans', sans-serif;
    background-color: #f9fafb;
`

container.style = ` 
width: 400px;
margin: 0 auto;
border: 1px solid #868686;
background-color: #ffffff;
border-radius: 5px;
box-shadow: 0 2px 10px rgb(0 0 0 / 30%);
`;

form.style = `
padding: 30px 40px;
`;


var titleForm = document.createElement("h2");
titleForm.innerHTML = "Register With Us";
form.appendChild(titleForm);

//css h2
titleForm.style = `
    text-align: center;
    margin: 0 0 20px;
`

var formControls = [{
    label: "Username",
    type: "text",
    id: "username",
    placeholder: "Enter Username",

}, {

    label: "Email",
    type: "email",
    id: "email",
    placeholder: "Enter email",
    errorMessage: "Email is not valid"
}, {
    label: "Password",
    type: "password",
    id: "password",
    placeholder: "Enter password",
    errorMessage: "Password must be at least 6 characters"
}, {
    label: "Confirm Password",
    type: "password",
    id: "password2",
    placeholder: "Enter password again",
    errorMessage: "Password2 is required"
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
    smallDispaly.innerHTML = value.errorMessage;

    form.appendChild(formControl);
    formControl.appendChild(titleLabel);
    formControl.appendChild(inputField);
    formControl.appendChild(smallDispaly);


    //css FormControl
    formControl.style = `
        margin-bottom: 10px;
        padding-bottom: 20px;
        position: relative;
    `;

    //css titleLabel
    titleLabel.style = `
    color: #777;
    display: block;
    margin-bottom: 5px;
    `

    inputField.style = `
    width: 100%;
    border: 2px solid #f0f0f0;
    border-radius: 4px;
    display: block;
    width: 100%;
    padding: 10px;
    font-size: 14px;
    `;

    smallDispaly.style = `
    color: #e74c3c;
    position: absolute;
    bottom: 0;
    left: 0;
    `;
    smallDispaly.style.visibility = "hidden";

});










var btnSubmit = document.createElement("button");
btnSubmit.type = "submit";
btnSubmit.innerHTML = "Submit";
btnSubmit.classList.add("btn");

form.appendChild(btnSubmit);

//css btn
btnSubmit.style = `
    border: 0;
    border-radius: 5px;
    background-color: #00B000;
    color: white;
    font-size: 16px;
    font-weight: 600;
    padding: 12px 22px;
    cursor: pointer;
    margin-bottom: 10px;
`



btnSubmit.addEventListener("click", function(event) {
    event.preventDefault();
    var username = document.getElementById('username');
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var password2 = document.getElementById('password2');
    var errorUsername = document.getElementById('error-username');
    var errorEmail = document.getElementById('error-email');
    var errorPassword = document.getElementById('error-password');
    var errorPassword2 = document.getElementById('error-password2');
    var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;



    if (username.value === "") {
        errorUsername.style.visibility = "visible";
        errorUsername.innerHTML = "Username is required ";
    } else if (username.value.length < 3) {
        errorUsername.style.visibility = "visible";
        errorUsername.innerHTML = "Username must be at least 3 characters ";
    } else {
        username.style.borderColor = '#2ecc71';
        errorUsername.style.visibility = "hidden";
    }

    if (email.value === "") {
        errorEmail.style.visibility = "visible";
        errorEmail.innerHTML = "Email is required ";
    } else if (!mailFormat.test(email.value)) {
        errorEmail.style.visibility = "visible";
        errorEmail.innerHTML = "Email is invalid";
    } else {
        email.style.borderColor = '#2ecc71';
        errorEmail.style.visibility = "hidden";
    }

    if (password.value === "") {
        errorPassword.style.visibility = "visible";
        errorPassword.innerHTML = "Password is required ";
    } else if (password.value.length < 6) {
        errorPassword.style.visibility = "visible";
        errorPassword.innerHTML = "Password must be at least 6 characters";
    } else {
        password.style.borderColor = '#2ecc71';
        errorPassword.style.visibility = "hidden";
    }

    if (password2.value !== password.value) {
        errorPassword2.style.visibility = "visible";
        errorPassword2.innerHTML = "Passwords do not match";
    } else if (password2.value === "") {
        errorPassword2.style.visibility = "visible";
        errorPassword2.innerHTML = "Password2 is required";
    } else {
        password2.style.borderColor = '#2ecc71';
        errorPassword2.style.visibility = "hidden";
    }

});