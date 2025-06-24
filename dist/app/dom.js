import { minutes, seconds, startTimer, pauseTimer, resumeTimer, resetTimer, } from "./timer.js";
export function updateDisplay() {
    const min = minutes.toString().padStart(2, "0");
    const sec = seconds.toString().padStart(2, "0");
    const timerElement = document.getElementById("timer");
    if (timerElement != null) {
        timerElement.textContent = `${min}:${sec}`;
    }
}
document.addEventListener("DOMContentLoaded", () => {
    var _a, _b, _c, _d;
    (_a = document.getElementById("startBtn")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", startTimer);
    (_b = document.getElementById("pauseBtn")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", pauseTimer);
    (_c = document.getElementById("resumeBtn")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", resumeTimer);
    (_d = document.getElementById("resetBtn")) === null || _d === void 0 ? void 0 : _d.addEventListener("click", resetTimer);
});
