function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const colorStart = document.querySelector('button[data-start]');
const colorStop = document.querySelector('button[data-stop]');
let intervalId;
colorStop.disabled = true;
colorStart.addEventListener("click", () => {
    document.body.style.backgroundColor = getRandomHexColor();
    
    if(!intervalId) {
        intervalId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
        }, 1000);
    }
    colorStart.disabled = true;
    colorStop.disabled = false;
});

colorStop.addEventListener("click", () => {
    clearInterval(intervalId);
    intervalId = null;
    colorStart.disabled = false;
    colorStop.disabled = true;
});