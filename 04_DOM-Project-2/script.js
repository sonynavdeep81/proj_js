'use strict';

const showModal = document.querySelectorAll('.show-modal');
const closeModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');

/*Functions to follow DRY */
const remove = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const add = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

/*Show modals */
for (let i = 0; i < 3; i++) showModal[i].addEventListener('click', remove);

/*Hide modals */
closeModal.addEventListener('click', add);

/*Press Escape Key */
/*event object is passed to e that contains all information about the event */
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    add();
  }
});
