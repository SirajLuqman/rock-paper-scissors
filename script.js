"use strict";

// Play Rock, Paper, and Scissors.

const CHOICES = ["Rock", "Paper", "Scissors"];
const WINNING_SCORE = 5;

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

const scoreDisplay = document.querySelector("#score");
const resultsDisplay = document.querySelector("#results");

let playerScore = 0;
let computerScore = 0;
let roundNumber = 0;
let gameOver = false;

function normalizeChoice(value) {
  if (typeof value !== "string") return null;

  const normalized = value.trim().toLowerCase();

  return CHOICES.find((choice) => choice.toLowerCase() === normalized) ?? null;
}

function computerPlay() {
  const index = Math.floor(Math.random() * CHOICES.length);
  return CHOICES[index];
}

function playRound(playerSelection, computerSelection) {
  const player = normalizeChoice(playerSelection);
  const computer = normalizeChoice(computerSelection);

  if (!player || !computer) {
    return {
      outcome: "invalid",
      message: "Please choose Rock, Paper, or Scissors.",
    };
  }

  if (player === computer) {
    return {
      outcome: "draw",
      message: `It's a draw! Both chose ${player}.`,
    };
  }

  const playerWins =
    (player === "Rock" && computer === "Scissors") ||
    (player === "Paper" && computer === "Rock") ||
    (player === "Scissors" && computer === "Paper");

  if (playerWins) {
    return {
      outcome: "player",
      message: `${player} beats ${computer}. You win this round!`,
    };
  }

  return {
    outcome: "computer",
    message: `${computer} beats ${player}. The Evil AI wins this round.`,
  };
}

function updateScore() {
  scoreDisplay.textContent = `You: ${playerScore} | Evil AI: ${computerScore}`;
}

function displayResult(message) {
  const paragraph = document.createElement("p");
  paragraph.textContent = message;

  resultsDisplay.appendChild(paragraph);
}

function checkWinner() {
  if (playerScore === WINNING_SCORE) {
    displayResult("YOU WIN! The Evil AI has been defeated!");

    gameOver = true;
  } else if (computerScore === WINNING_SCORE) {
    displayResult("THE EVIL AI WINS! Better luck next time!");

    gameOver = true;
  }

  if (gameOver) {
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
  }
}

function handlePlayerChoice(playerSelection) {
  if (gameOver) return;

  const computerSelection = computerPlay();

  const result = playRound(playerSelection, computerSelection);

  if (result.outcome === "invalid") {
    displayResult(result.message);
    return;
  }

  roundNumber++;

  if (result.outcome === "player") {
    playerScore++;
  } else if (result.outcome === "computer") {
    computerScore++;
  }

  displayResult(
    `Round ${roundNumber}: You chose ${playerSelection}; ` +
      `the Evil AI chose ${computerSelection}.`,
  );

  displayResult(result.message);

  updateScore();

  checkWinner();
}

// Add event listeners to the three buttons.

rockButton.addEventListener("click", () => {
  handlePlayerChoice("Rock");
});

paperButton.addEventListener("click", () => {
  handlePlayerChoice("Paper");
});

scissorsButton.addEventListener("click", () => {
  handlePlayerChoice("Scissors");
});
