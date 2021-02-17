// Email Validation Field 1
const emailField1 = document.getElementById("email-1");
const button1 = document.getElementById("btn1");
const response1 = document.getElementById("response1");

button1.addEventListener("click", 
function () {
    const email = emailField1.nodeValue;
    if (validateEmail1(email)) {
        response1.innerHTML = "Please check your email";
    } else {
        response1.innerHTML = "Not a valid email address";
    }
});

function validateEmail1(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// Email Validation Field 2
const emailField2 = document.getElementById("email-2");
const button2 = document.getElementById("btn2");
const response2 = document.getElementById("response2");

button2.addEventListener("click", 
function () {
    const email = emailField2.nodeValue;
    if (validateEmail2(email)) {
        response2.innerHTML = "Please check your email";
    } else {
        response2.innerHTML = "Not a valid email address";
    }
});

function validateEmail2(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
