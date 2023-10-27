'use strict';

//Make starting scores 0
let hold = 0;
let score0El = document.querySelector('#score--0');
let score1El = document.querySelector('#score--1');
score0El.textContent = 0;
score1El.textContent = 0;

//Hide dice
const diceEl = document.querySelector('.dice');
diceEl.classList.add('hidden');

//Increment scores
const player1Score = document.querySelector('#current--0');
const player2Score = document.querySelector('#current--1');

//Click Hold
document.querySelector('.btn--hold').addEventListener('click', () => {
  if (Number(score0El.textContent) >= 30)
    score0El.textContent = 'Player 1 Wins!!';
  if (Number(score1El.textContent) >= 30)
    score1El.textContent = 'Player 2 Wins!!';
  if (hold === 0) {
    hold = 1;
    score0El.textContent =
      Number(score0El.textContent) + Number(player1Score.textContent);
    player1Score.textContent = 0;
  } else {
    hold = 0;
    score1El.textContent =
      Number(score1El.textContent) + Number(player2Score.textContent);
    player2Score.textContent = 0;
  }
});

//Roll Dice
document.querySelector('.btn--roll').addEventListener('click', () => {
  diceEl.classList.remove('hidden');
  const num = Math.trunc(Math.random() * 6 + 1);
  diceEl.setAttribute('src', `dice-${num}.png`);
  if (hold == 0) {
    if (num !== 1)
      player1Score.textContent = Number(player1Score.textContent) + num;
    else player1Score.textContent = 0;
  } else {
    if (num !== 1)
      player2Score.textContent = Number(player2Score.textContent) + num;
    else player2Score.textContent = 0;
  }
});

//New game
document.querySelector('.btn--new').addEventListener('click', () => {
  player1Score.textContent = 0;
  player2Score.textContent = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;
  diceEl.classList.add('hidden');
});
