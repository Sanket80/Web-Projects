var navLinks = document.getElementById("navlinks");

function showMenu() {
    navLinks.style.right = "0";
}

function hideMenu() {
    navLinks.style.right = "-200px";
}

var fname = document.getElementById("name");
var email = document.getElementById("email");
var phone = document.getElementById("phone");
var password = document.getElementById("password");
var cpassword = document.getElementById("cpassword");


function setErrorMessage(id, message) {
    element = document.getElementById(id);
    element.innerHTML = message;
}

function clearErrorMessage() {
    errors = document.getElementsByClassName("error");
    for(let item of errors){
        item.innerHTML = "";
    }
}

function validateForm() {
    clearErrorMessage();
    
    var returnval = true;
    if (fname.value == "") {
        setErrorMessage("nameError", "*Please enter your name");
        returnval = false;
    }
    if (email.value == "") {
        setErrorMessage("emailError", "*Please enter your email");
        returnval = false;
    }
    if(!email.value.includes("@")){
        setErrorMessage("emailError", "*Please enter a valid email");
        returnval = false;
    }
    if (phone.value == "") {
        setErrorMessage("phoneError", "*Please enter your phone number");
        returnval = false;
    }
    if (isNaN(phone.value) || phone.value.length != 10) {
        setErrorMessage("phoneError", "*Please enter a valid phone number");
        returnval = false;
    }
    if (password.value == "") {
        setErrorMessage("passwordError", "*Please enter your password");
        returnval = false;
    }
    if(password.value.length < 8){
        setErrorMessage("passwordError", "*Password must be atleast 8 characters long");
        returnval = false;
    }
    if (cpassword.value == "") {
        setErrorMessage("cpasswordError", "*Please confirm your password");
        returnval = false;
    }
    if (password.value != cpassword.value) {
        setErrorMessage("cpasswordError", "*Passwords do not match");
        returnval = false;
    }
    
    return returnval;
}