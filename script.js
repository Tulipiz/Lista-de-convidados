const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

const teaBaby = "26 dec 2023";
/* Função do  Countdown(contagem regressiva)*/
function countdown() {
    const teaBabyDate = new Date(teaBaby);
    const currentDate = new Date();

    const totalSeconds = (teaBabyDate - currentDate) / 1000;
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);

    if(totalSeconds <= 0){
        daysEl.innerHTML = 0;
        hoursEl.innerHTML = 0;
        minsEl.innerHTML = 0;
        secondsEl.innerHTML = 0;
    }
}
function formatTime(time){
    return time < 10 ? `0${time}` : time;
}
countdown();

setInterval(countdown, 1000);

