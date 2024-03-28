let hrs = document.getElementById('hrs');
let min = document.getElementById('min');
let sec = document.getElementById('sec');

setInterval( () => {
    let day = new Date();
    
    // logic for analog clock
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * 6;
    let ss = day.getSeconds() * 6;
    
    hrs.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
    min.style.transform = `rotateZ(${mm}deg)`;
    sec.style.transform = `rotateZ(${ss}deg)`;

    // logic for digital clock
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');
    let ampm = document.getElementById('ampm');

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let am = h >= 12 ? "PM" : "AM";

    // convert 24hr clock to 12hr clock
    if(h > 12){
        h = h - 12;
    }

    // add zero before single digit number
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
    ampm.innerHTML = am;

}, 1000);