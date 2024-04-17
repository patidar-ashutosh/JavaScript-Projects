let indicator = document.querySelector(".scrollIndicator");
let textValue = document.getElementById("textValue");

textValue.innerHTML = 0 + '<span>%</span>'


window.addEventListener("scroll", () => {
    let maxHeight = document.documentElement.scrollHeight - window.innerHeight;

    let scrollRatio = window.scrollY / maxHeight;
    let angle = scrollRatio * 360;
    let percent = Math.round(scrollRatio * 100);

    indicator.style.background = `conic-gradient(from 0deg, #008eff 0%,
        #f00 ${angle}deg, #000 ${angle}deg)`;

    textValue.innerHTML = percent + '<span>%</span>'
})