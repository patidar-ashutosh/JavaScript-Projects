const icon = document.getElementById("icon");
const openIcon = document.getElementById("open-icon");
const navLinks = document.getElementById("nav-links");

icon.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");

    if(document.body.classList.contains("dark-theme")){
        icon.src = "images/sun.png";
    }
    else{
        icon.src = "images/moon.png";
    }
});

openIcon.addEventListener("click", () => {
    navLinks.classList.toggle("active");
})