
const body = document.querySelector('body');
const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');

stopBtn.disabled = true;
let intervalID = null;

const switcherDelay = 1000;

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

startBtn.addEventListener('click', () => {
    intervalID = setInterval(() => {
        body.style.backgroundColor = getRandomHexColor();
    }, switcherDelay);
    startBtn.disabled = true;
    stopBtn.disabled = false;
});

stopBtn.addEventListener('click', () => {
    clearInterval(intervalID);
    startBtn.disabled = false;
    stopBtn.disabled = true;
});
