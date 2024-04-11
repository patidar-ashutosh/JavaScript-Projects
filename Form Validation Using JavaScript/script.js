const nameError = document.getElementById("name-error");
const phoneError = document.getElementById("phone-error");
const emailError = document.getElementById("email-error");
const messageError = document.getElementById("message-error");
const submitError = document.getElementById("submit-error");

function validateName(){
    const name = document.getElementById("contact-name").value;

    if(name.length == 0){
        nameError.innerHTML = "Name is required";
        return false;
    }

    // first character must be letter and after complete one word need one space
    // and after we have second word
    // name validation regular expression
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = "Write full name";
        return false;
    }

    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validatePhone(){
    const phone = document.getElementById("contact-phone").value;

    if(phone.length == 0){
        phoneError.innerHTML = "Phone no is required";
        return false;
    }
    if(phone.length !== 10){
        phoneError.innerHTML = "Phone no should be 10 digits";
        return false;
    }
    // phone number validation regular expression
    if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML = "Only digits please";
        return false;
    }

    phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateEmail(){
    const email = document.getElementById("contact-email").value;

    if(email.length == 0){
        emailError.innerHTML = "Email is required";
        return false;
    }
    // email validation regular expression
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = "Email Invalid";
        return false;
    }

    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateMessage(){
    const message = document.getElementById("contact-message").value;
    let required = 30;
    let remaining = required - message.length;

    if(remaining > 0){
        messageError.innerHTML = remaining + " more characters required";
        return false;
    }

    messageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateForm(){
    if(!validateName() || !validatePhone() || !validateEmail() || !validateMessage()){
        submitError.style.display = "block";
        submitError.innerHTML = "Please fix error to submit";
        setTimeout(() => {
            submitError.style.display = "none";  
        },3000);
        return false;
    }
}

// NOTE  : we can return false means the form is not submit.