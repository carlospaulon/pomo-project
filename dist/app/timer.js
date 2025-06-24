import { updateDisplay } from './dom.js';
export let timer;
export let minutes = 25;
export let seconds = 0;
export let isRunning = false;
export let isPaused = false;
export function startTimer() {
    if (!isRunning) {
        isRunning = true;
        isPaused = false;
        timer = setInterval(() => {
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(timer);
                    alert("Time is up!");
                    isRunning = false;
                    return;
                }
                minutes--;
                seconds = 59;
            }
            else {
                seconds--;
            }
            updateDisplay();
        }, 1000);
    }
}
export function pauseTimer() {
    if (isRunning) {
        clearInterval(timer);
        isPaused = true;
        isRunning = false;
    }
}
export function resumeTimer() {
    if (isPaused) {
        startTimer();
    }
}
export function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    isPaused = false;
    minutes = 25;
    seconds = 0;
    updateDisplay();
}
