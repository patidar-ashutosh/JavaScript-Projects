const password = document.getElementById("password");
const eyeicon = document.getElementById("eyeicon");

eyeicon.addEventListener("click", () => {
    if(password.type == "password"){
        password.type = "text";
        eyeicon.src = "./Images/eye-open.png";
    }
    else{
        password.type = "password";
        eyeicon.src = "./Images/eye-close.png";
    }
});