var body = document.body;
var box = document.createElement('div');
box.classList.add("boxwrapper");

body.appendChild(box);

var passwordWrapper = document.createElement('form');
var passwordInputBox = document.createElement('div');
var controlWrapper = document.createElement('div');

passwordWrapper.classList.add("box");
box.appendChild(passwordWrapper);

passwordWrapper.appendChild(passwordInputBox);
passwordWrapper.appendChild(controlWrapper);

passwordInputBox.className = "passwordBox";

var titlePassword = document.createElement("h3");
titlePassword.innerHTML = "Password";

var passwordInput = document.createElement("input");
passwordInput.type = "password"
passwordInput.id = "pwd";
passwordInput.className = "passwordContainer"
passwordInput.placeholder = "Enter Your Password";
passwordInput.required = "true";

var eyeSlashIcon = document.createElement("i");
eyeSlashIcon.className = "fa fa-eye-slash";
eyeSlashIcon.id = "eyeToggle";

passwordInputBox.appendChild(titlePassword);
passwordInputBox.appendChild(passwordInput);
passwordInputBox.appendChild(eyeSlashIcon);


eyeSlashIcon.addEventListener("click", function() {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        eyeSlashIcon.className = "fa fa-eye";
    } else {
        passwordInput.type = "password";
        eyeSlashIcon.className = "fa fa-eye-slash";
    }
});



controlWrapper.className = "controls-container";

var forgotPassword = document.createElement("span");
var forgotPasswordLink = document.createElement("a");
forgotPasswordLink.innerHTML = "Forgot Password?";
forgotPasswordLink.setAttribute("href", "");
forgotPasswordLink.setAttribute("id", "forgetPassword");

forgotPasswordLink.addEventListener("click", function() {
    passwordInput.value = "";

})

var btnSubmit = document.createElement("button");
btnSubmit.innerHTML = "Next";

forgotPassword.appendChild(forgotPasswordLink);
controlWrapper.appendChild(forgotPassword);
controlWrapper.appendChild(btnSubmit);

btnSubmit.addEventListener("click", function(event) {
    if (passwordInput.value !== "") {
        event.preventDefault();
        console.log("Successful", passwordInput.value);
        passwordInput.value = "";

    }


});