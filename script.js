const clickButton = document.getElementById('click-button');
const startButton = document.getElementById('start-button');
const timeDisplay = document.getElementById('time');
const scoreDisplay = document.getElementById('score');
const resultDisplay = document.getElementById('result');

let timeLeft = 10;
let score = 0;
let timerId = null;

function updateDisplay() {
  timeDisplay.textContent = timeLeft;
  scoreDisplay.textContent = score;
}

function endGame() {
  clearInterval(timerId);
  clickButton.disabled = true;
  startButton.disabled = false;
  resultDisplay.textContent = `Temps écoulé ! Ton score est de ${score} clics.`;
  resultDisplay.classList.remove('hidden');
}

function startGame() {
  timeLeft = 10;
  score = 0;
  updateDisplay();
  resultDisplay.classList.add('hidden');
  clickButton.disabled = false;
  startButton.disabled = true;
  clickButton.textContent = 'Clique-moi !';

  timerId = setInterval(() => {
    timeLeft--;
    updateDisplay();
    if (timeLeft <= 0) {
      endGame();
    }
  }, 1000);
}

clickButton.addEventListener('click', () => {
  if (!clickButton.disabled) {
    score++;
    scoreDisplay.textContent = score;
  }
});

startButton.addEventListener('click', startGame);

// Initial state
clickButton.disabled = true;
