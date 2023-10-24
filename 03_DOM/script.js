'use strict';

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let hscore = 0;
let score_val;
console.log(secretNumber);
const display = function (message) {
  document.querySelector('.message').textContent = message;
};

/*Check button */
document.querySelector('.check').addEventListener('click', function () {
  if (score) {
    const val = Number(document.querySelector('.guess').value);
    if (val === secretNumber) {
      display('✌️Correct answer!');
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('body').style.backgroundColor = '#60b347';
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
    document.querySelector('.score').textContent = score;
  }
});
/*Again button */
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
  score = 20;
  document.querySelector('.number').textContent = '?';
  display('Start guessing...');
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.score').textContent = 20;
  document.querySelector('.guess').value = '';
  console.log(secretNumber);
});
