let circle = document.querySelectorAll(".circle");

circle.forEach( (progress) => {
    let degree = 0;
    let targetDegree = parseInt(progress.getAttribute("data-degree"));
    let color = progress.getAttribute("data-color");
    let number = progress.querySelector(".number");

    let interval = setInterval( () => {
        degree++;
        if(degree > targetDegree){
            clearInterval(interval);
            return;
        }

        progress.style.background = `conic-gradient(${color} ${degree}%,
        #222 0%)`;

        number.innerHTML = degree + "<span>%</span>";
        number.style.color = color;

    }, 50)
})