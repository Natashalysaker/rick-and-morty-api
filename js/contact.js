const form = document.querySelector("#contactForm");
form.addEventListener("submit", validateForm);

function validateForm(event) {
    event.preventDefault();
    console.log("The form was submitted");

    const firstName = document.querySelector("#firstName");
    const lastName = document.querySelector("#lastName");
    const lastenameError = document.querySelector("#lastNameError");
    const firstNameError = document.querySelector("#firstNameError");

    if (checkInputLength(firstName.value) === true) {
    firstNameError.style.display = "none"; 
    } else {
       firstNameError.style.display = "block"; 
    }

    if (checkInputLength(lastName.value) === true) {
        lastNameError.style.display = "none"; 
        } else {
           lastNameError.style.display = "block"; 
        }


function checkInputLength(value) {

    const trimmedValue = value.trim();

    if (trimmedValue.length > 2) {
        return true;
    } else {
        return false;
    }
};

const email = document.querySelector("#email");
    const emailError = document.querySelector("#emailError");
    const invalidEmailError = document.querySelector("#invalidEmailError");

    const emailValue = email.value;

    if (checkInputLength(emailValue)) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }

    if (validateEmail(emailValue)) {
        invalidEmailError.style.display = "none";
    } else {
        invalidEmailError.style.display = "block";
    }

    // validate the message textarea
    const message = document.querySelector("#message");
    const messageError = document.querySelector("#messageError");
    const messageValue = message.value;

    if (checkTextAreaLength(messageValue)) {
        messageError.style.display = "none";
    } else {
        messageError.style.display = "block";
    }
}

function checkInputLength(value) {
  
    const trimmedValue = value.trim();

    if (trimmedValue.length > 0) {
        return true;
    } else {
        return false;
    }
}

function checkTextAreaLength(value) {
  
    const trimmedValue = value.trim();

   
    if (trimmedValue.length >= 10) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}

