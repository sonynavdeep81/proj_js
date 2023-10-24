'use strict';

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let hscore = 0;
let score_val;
console.log(secretNumber);

/*Check button */
document.querySelector('.check').addEventListener('click', function () {
  if (score) {
    const val = Number(document.querySelector('.guess').value);
    if (val === secretNumber) {
      document.querySelector('.message').textContent = '✌️Correct answer!';
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('body').style.backgroundColor = '#60b347';
      score_val = Number(document.querySelector('.score').textContent);
      if (score_val > hscore) {
        hscore = score_val;
        document.querySelector('.highscore').textContent = score_val;
      }
    } else if (val !== secretNumber) {
      document.querySelector('.message').textContent =
        val < secretNumber ? 'Too Low!' : 'Too High!';
      score--;
      if (score === 0) {
        document.querySelector('.message').textContent = 'You lost the game!!';
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
  document.querySelector('.message').textContent = 'Start guessing...';
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.score').textContent = 20;
  document.querySelector('.guess').value = '';
  console.log(secretNumber);
});
