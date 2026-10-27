# Rock, Paper, Scissors — Stop the Evil AI

A browser-based JavaScript game where the player competes against the Evil AI using Rock, Paper, or Scissors. Select your choice by clicking a button. The first side to reach five points wins the game. Draws do not score.

## Run

1. Open `index.html` in a modern web browser.
2. Click the **Rock**, **Paper**, or **Scissors** button to play a round.
3. View each round's result and the running score directly on the webpage.
4. Continue playing until either you or the Evil AI reaches five points.
5. The game announces the winner and disables the buttons when the game ends.

## Files

- `index.html`: Provides the game interface, selection buttons, score display, and results area.
- `script.js`: Handles game logic, computer choices, player input validation, button event listeners, scoring, DOM updates, and winner detection.

## Rules

- Rock beats Scissors.
- Scissors beats Paper.
- Paper beats Rock.
- Matching choices result in a draw, and neither side receives a point.
- The first side to reach five points wins.
- No fixed number of rounds is required; the game continues until a winner is determined.
- Once the game ends, the selection buttons are disabled.

No external libraries, dependencies, or build steps are required. The game uses JavaScript DOM manipulation to display results and update the score.