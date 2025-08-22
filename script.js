
let timer;
let isRunning = false;
let seconds = 0;
let minutes = 0;
let hours = 0;

const timeDisplay = document.getElementById("time");
const lapsList = document.getElementById("laps");

document.getElementById("startBtn").addEventListener("click", startTimer);
document.getElementById("pauseBtn").addEventListener("click", pauseTimer);
document.getElementById("resetBtn").addEventListener("click", resetTimer);
document.getElementById("lapBtn").addEventListener("click", recordLap);

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(updateTime, 1000);
    }
}

function pauseTimer() {
    isRunning = false;
    clearInterval(timer);
}

function resetTimer() {
    isRunning = false;
    clearInterval(timer);
    seconds = 0;
    minutes = 0;
    hours = 0;
    timeDisplay.textContent = "00:00:00";
    lapsList.innerHTML = "";
}

function recordLap() {
    if (isRunning) {
        const lapTime = timeDisplay.textContent;
        const li = document.createElement("li");
        li.textContent = `Lap: ${lapTime}`;
        lapsList.appendChild(li);
    }
}

function updateTime() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }
    timeDisplay.textContent =
        (hours < 10 ? "0" : "") + hours + ":" +
        (minutes < 10 ? "0" : "") + minutes + ":" +
        (seconds < 10 ? "0" : "") + seconds;
}