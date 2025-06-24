import {
  minutes,
  seconds,
  startTimer,
  pauseTimer,
  resumeTimer,
  resetTimer,
} from "./timer.js";

export function updateDisplay() {
  const min = minutes.toString().padStart(2, "0");
  const sec = seconds.toString().padStart(2, "0");
  const timerElement = document.getElementById("timer");

  if (timerElement != null) {
    timerElement.textContent = `${min}:${sec}`;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("startBtn")?.addEventListener("click", startTimer);
  document.getElementById("pauseBtn")?.addEventListener("click", pauseTimer);
  document.getElementById("resumeBtn")?.addEventListener("click", resumeTimer);
  document.getElementById("resetBtn")?.addEventListener("click", resetTimer);
});
