var heading = document.createElement("h1");
heading.innerHTML = "Lets Learn Js";
heading.classList.add("center");
heading.classList.add("gray");

document.body.appendChild(heading);

var para = document.createElement("p");
para.innerHTML = "If you wish to learn js ";

var LearMoreLink = document.createElement("a");
LearMoreLink.innerHTML = "Learn More";
LearMoreLink.setAttribute("href", "ww.");
LearMoreLink.setAttribute("id", "blue");

para.appendChild(LearMoreLink);


var divForPara = document.createElement("div");
divForPara.appendChild(para);
divForPara.classList.add("center");

document.body.appendChild(divForPara);

var ListWrap = document.createElement("ol");
ListWrap.classList.add("center");
document.body.appendChild(ListWrap);

var LearningLinks = [{
        url: "https://www.w3schools.com/",
        name: "W3Schools",
    },
    {
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        name: "Mozilla",
    },
];
LearningLinks.forEach((element) => {
    var LinkItem = document.createElement("li");
    var LinkName = document.createElement("a");

    LinkName.innerHTML = element.name;
    LinkName.setAttribute("href", element.url);
    LinkItem.appendChild(LinkName);
    ListWrap.appendChild(LinkItem);
});

var userNameInput = document.createElement("input");
userNameInput.type = "text";
userNameInput.id = "userNamrInput";

userNameInput.addEventListener("mouseover", function(event) {
    event.target.style.borderColor = "green";
});
userNameInput.addEventListener("mouseout", function(event) {
    event.target.style.borderColor = "white";
});

document.body.appendChild(userNameInput);


var btnSubmit = document.createElement("button");
btnSubmit.innerHTML = "Console Input Value";
document.body.appendChild(btnSubmit);

btnSubmit.addEventListener("click", function(event) {
    var userNameIn = document.getElementById("userNameInput");
    console.log(userNameIn.value);
});