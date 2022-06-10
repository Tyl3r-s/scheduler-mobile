var clock = document.getElementById("currentTime");

var date = document.getElementById("todaysDate")

const currentHour = moment().format("H");

function clockTimer() {
    clock.textContent = moment().format("LTS");
}

function todaysDate() {
    date.textContent = moment().format("dddd MMMM Do YYYY");
}

setInterval(todaysDate, 1000);

setInterval(clockTimer, 1000);