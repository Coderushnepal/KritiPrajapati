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
    padding-top: 90px;
    min-width: 700px;
    font-size: 16px;
    font-family:  'Open Sans', sans-serif;
    background-color: #f9fafb;
`;

container.style = ` 
    width: 400px;
    margin: 0 auto;
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
}, {
    label: "Password",
    type: "password",
    id: "password",
    placeholder: "Enter password",
}, {
    label: "Confirm Password",
    type: "password",
    id: "password2",
    placeholder: "Enter password again"
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
    `;

    inputField.style = `
        width: 100%;
        border: 2px solid #f0f0f0;
        border-radius: 4px;
        width: 92.5%;
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
    cursor: pointer;
    background-color: #3498db;
    border: 2px solid #3498db;
    border-radius: 4px;
    color: #fff;
    font-size: 16px;
    padding: 10px;
    width: 100%;
`;

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

    //username validation
    if (requiredValidator(username, errorUsername) && lengthValidator(username, errorUsername, 3)) {
        username.style.borderColor = '#2ecc71';
        errorUsername.style.visibility = "hidden";
    }

    //email validation
    if (requiredValidator(email, errorEmail) && emailValidator(email, errorEmail)) {
        email.style.borderColor = '#2ecc71';
        errorEmail.style.visibility = "hidden";
    }

    //password validatiom
    if (requiredValidator(password, errorPassword) && lengthValidator(password, errorPassword, 6)) {
        password.style.borderColor = '#2ecc71';
        errorPassword.style.visibility = "hidden";
    }

    //password confirmation
    if (confirmPasswordValidaor(password, password2, errorPassword2) && requiredValidator(password2, errorPassword2)) {
        password2.style.borderColor = '#2ecc71';
        errorPassword2.style.visibility = "hidden";
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

function lengthValidator(inputField, errorHolder, length) {
    if (inputField.value.length < length) {
        errorHolder.style.visibility = "visible";
        errorHolder.innerHTML = `${inputField.id} must be at least ${length} characters`;
        inputField.style.borderColor = 'red';
        return false;
    }
    return true;
}

function emailValidator(inputField, errorHolder) {
    var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!mailFormat.test(inputField.value)) {
        errorHolder.style.visibility = "visible";
        errorHolder.innerHTML = "Email is invalid";
        inputField.style.borderColor = 'red';
        return false;
    }
    return true;
}

function confirmPasswordValidaor(password, password2, errorHolder) {
    if (password2.value !== password.value) {
        errorHolder.style.visibility = "visible";
        errorHolder.innerHTML = "Passwords do not match";
        password2.style.borderColor = 'red';
        return false;
    }
    return true;
}