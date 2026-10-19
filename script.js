"use strict";

const CHOICES = ["Rock", "Paper", "Scissors"];
const WINNING_SCORE = 3;

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
      message: "A round needs a valid Rock, Paper, or Scissors choice from both sides."
    };
  }

  if (player === computer) {
    return { outcome: "draw", message: `It's a draw! Both chose ${player}.` };
  }

  const playerWins =
    (player === "Rock" && computer === "Scissors") ||
    (player === "Paper" && computer === "Rock") ||
    (player === "Scissors" && computer === "Paper");

  if (playerWins) {
    return {
      outcome: "player",
      message: `${player} beats ${computer}. You win this round!`
    };
  }

  return {
    outcome: "computer",
    message: `${computer} beats ${player}. The AI wins this round.`
  };
}

function getPlayerSelection() {
  while (true) {
    let answer;
    try {
      answer = prompt(
        "Choose Rock, Paper, or Scissors.\n" +
        "Your choice is not case-sensitive. You can type extra spaces.\n" +
        "Invalid entries do not count as rounds. Press Cancel to quit."
      );
    } catch (error) {
      console.error("The input dialog could not be opened. The game will end safely.", error);
      return null;
    }

    if (answer === null) return null;

    const choice = normalizeChoice(answer);
    if (choice) return choice;

    alert("That choice is not valid. Please enter Rock, Paper, or Scissors. Your score has not changed.");
  }
}

function game() {
  alert(
    "ROCK, PAPER, SCISSORS: STOP THE EVIL AI!\n\n" +
    "First to win 3 rounds saves the world. Draws score no points, and invalid entries do not count.\n\n" +
    "You play using the prompts. Round results, scores, and the final result appear in the browser console.\n\n" +
    "To open the console in Chrome on Windows/Linux, press Ctrl+Shift+J (or F12 and choose Console). " +
    "On Mac, press Cmd+Option+J. Keep the Console tab open while playing.\n\n" +
    "Press OK when you are ready. Press Cancel in a choice prompt to quit safely."
  );

  let playerScore = 0;
  let computerScore = 0;
  let roundNumber = 0;

  console.clear();
  console.log("=== ROCK, PAPER, SCISSORS: STOP THE EVIL AI ===");
  console.log("First to 3 points wins. Draws award no points.");
  console.log("Open/keep the Console tab open to follow the game.");

  while (playerScore < WINNING_SCORE && computerScore < WINNING_SCORE) {
    const playerSelection = getPlayerSelection();
    if (playerSelection === null) {
      console.log("Game cancelled. No additional round was played.");
      alert("Game cancelled safely. Check the browser console for the rounds played so far.");
      return;
    }

    const computerSelection = computerPlay();
    const result = playRound(playerSelection, computerSelection);
    if (result.outcome === "invalid") {
      // Defensive guard: invalid selections must never affect the score.
      alert(result.message);
      continue;
    }

    roundNumber += 1;
    if (result.outcome === "player") playerScore += 1;
    if (result.outcome === "computer") computerScore += 1;

    console.log(`Round ${roundNumber}: You chose ${playerSelection}; the AI chose ${computerSelection}.`);
    console.log(result.message);
    console.log(`Score — You: ${playerScore} | Evil AI: ${computerScore}`);
    console.log("----------------------------------------");

    if (playerScore < WINNING_SCORE && computerScore < WINNING_SCORE) {
      alert(`${result.message}\n\nScore — You: ${playerScore} | Evil AI: ${computerScore}\n\nChoose again. First to ${WINNING_SCORE} points wins.`);
    }
  }

  const finalMessage = playerScore === WINNING_SCORE
    ? "YOU WIN! The evil AI has been defeated and humanity is safe."
    : "THE EVIL AI WINS! The world will have to try again.";

  console.log("=== FINAL RESULT ===");
  console.log(finalMessage);
  console.log(`Final score — You: ${playerScore} | Evil AI: ${computerScore}`);
  alert(`${finalMessage}\n\nFinal score — You: ${playerScore} | Evil AI: ${computerScore}\n\nSee the browser console for the full game record.`);
}

game();
