const choices = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let computerScore = 0;

const rockBtn = document.getElementById("rockBtn");
const paperBtn = document.getElementById("paperBtn");
const scissorsBtn = document.getElementById("scissorsBtn");
const resultEl = document.getElementById("result");
const scoreEl = document.getElementById("score");

function playRound(playerChoice) {
const computerChoice = choices[Math.floor(Math.random() * choices.length)];

// Updating the score based on the winning logic
if (playerChoice === computerChoice) {
    resultEl.textContent = "It's a tie!";
} else if (
    (playerChoice === "Rock" && computerChoice === "Scissors") ||
    (playerChoice === "Paper" && computerChoice === "Rock") ||
    (playerChoice === "Scissors" && computerChoice === "Paper")
) {
    playerScore++;
    resultEl.textContent = "You win!";
} else {
    computerScore++;
    resultEl.textContent = "Computer wins!";
}

// Updating the score display
scoreEl.textContent = `Score: ${playerScore} - ${computerScore} (Computer)`;
}

rockBtn.addEventListener("click", () => playRound("Rock"));
paperBtn.addEventListener("click", () => playRound("Paper"));
scissorsBtn.addEventListener("click", () => playRound("Scissors"));