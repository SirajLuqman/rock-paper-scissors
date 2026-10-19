# Rock, Paper, Scissors — Stop the Evil AI

A browser-dialog JavaScript game. The first side to win three rounds wins the game. Draws do not score; invalid input does not consume a round or change the score.

## Run
1. Open `index.html` in a modern browser.
2. Read the startup instructions in the alert. The game uses prompts for choices and alerts for feedback.
3. Keep the browser Console open to see each round, score, and final result. In Chrome on Windows/Linux, press `Ctrl+Shift+J` or `F12` and select **Console**. On macOS, press `Cmd+Option+J`.
4. Enter `Rock`, `Paper`, or `Scissors` in the prompt. Capitalization and surrounding spaces do not matter. Select **Cancel** in a choice prompt to quit safely.

## Files
- `index.html`: blank page boilerplate that loads the external script.
- `script.js`: game logic, input validation, scoring, and console output.

No CSS, DOM manipulation, dependencies, or build step are used.
