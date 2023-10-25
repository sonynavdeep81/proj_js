'use strict';

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let hscore = 0;
let score_val;
console.log(secretNumber);
/*Following functions have been used to remove duplicacy (DRY)--> dont repeat yourself rule followed */
const display = function (message) {
  //anonymous function or function expression used here
  document.querySelector('.message').textContent = message;
};
const displaySecretNumber = function (secret) {
  document.querySelector('.number').textContent = secret;
};
const changeBackground = function (clr) {
  document.querySelector('body').style.backgroundColor = clr;
};
const changeWidth = (w) => {
  //used arrow function here
  document.querySelector('.number').style.width = w;
};
const displayScore = (S) => {
  document.querySelector('.score').textContent = S;
};
/*Check button */
document.querySelector('.check').addEventListener('click', function () {
  if (score) {
    const val = Number(document.querySelector('.guess').value);
    if (val === secretNumber) {
      display('✌️Correct answer!');
      displaySecretNumber(secretNumber);
      changeWidth('30rem');
      changeBackground('#60b347');
      score_val = Number(document.querySelector('.score').textContent);
      if (score_val > hscore) {
        hscore = score_val;
        document.querySelector('.highscore').textContent = score_val;
      }
    } else if (val !== secretNumber) {
      display(val < secretNumber ? 'Too Low!' : 'Too High!');
      score--;
      if (score === 0) {
        display('You lost the game!!');
      }
    }
    displayScore(score);
  }
});
/*Again button */
document.querySelector('.again').addEventListener('click', function () {
  changeWidth('15rem');
  changeBackground('#222');
  score = 20;
  displaySecretNumber('?');
  display('Start guessing...');
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.score').textContent = 20;
  document.querySelector('.guess').value = '';
  console.log(secretNumber);
});
