let timer;
let startTime;
let elapsedTime = 0;
let isRunning = false;

function startStop() {
    if (isRunning) {
        clearInterval(timer);
        isRunning = false;
        document.getElementById("startButton").textContent = "Start";
    } else {
        startTime = Date.now() - elapsedTime;
        timer = setInterval(updateStopwatch, 10);
        isRunning = true;
        document.getElementById("startButton").textContent = "Stop";
    }
}

function updateStopwatch() {
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;
    displayTime(elapsedTime);
}

function displayTime(milliseconds) {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const centiseconds = Math.floor((milliseconds % 1000) / 10);
    document.getElementById("display").textContent = pad(minutes) + ":" + pad(seconds) + ":" + pad(centiseconds);
}

function reset() {
    clearInterval(timer);
    elapsedTime = 0;
    displayTime(elapsedTime);
    isRunning = false;
    document.getElementById("startButton").textContent = "Start";
}

function pad(number) {
    if (number < 10) {
        return '0' + number;
    }
    return number;
}
