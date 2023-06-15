// Get elements from the DOM
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');
const millisecondsElement = document.getElementById('milliseconds');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');

// Stopwatch variables
let intervalId;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;

// Update the timer display
function updateTimer() {
  milliseconds++;
  
  if (milliseconds === 100) {
    milliseconds = 0;
    seconds++;
  }
  
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }
  
  minutesElement.textContent = formatTime(minutes);
  secondsElement.textContent = formatTime(seconds);
  millisecondsElement.textContent = formatTime(milliseconds);
}

// Format time to have leading zeros
function formatTime(time) {
  return time.toString().padStart(2, '0');
}

// Start the stopwatch
function startTimer() {
  intervalId = setInterval(updateTimer, 10);
  
  startBtn.disabled = true;
  stopBtn.disabled = false;
}

// Stop the stopwatch
function stopTimer() {
  clearInterval(intervalId);
  
  startBtn.disabled = false;
  stopBtn.disabled = true;
}

// Reset the stopwatch
function resetTimer() {
  clearInterval(intervalId);
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  minutesElement.textContent = '00';
  secondsElement.textContent = '00';
  millisecondsElement.textContent = '00';
  
  startBtn.disabled = false;
  stopBtn.disabled = true;
}

// Attach event listeners to buttons
startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);