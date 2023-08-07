import { save, load, remove } from './storage';

console.log('Hello Header!');

// Функція для відкриття/
(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-header-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-open');
  }
})();

//

// (() => {
//   const changeIconOpen = document.querySelector('.header-btn-modal-open');
//   const changeIconClose = document.querySelector('.header-btn-modal-close');
//   changeIcon.addEventListener('click', () => {
//     changeIconClose.style.display = 'block';
//     changeIconOpen.style.display = 'none';
//   });
// })();

// const burgerMenu = document.querySelector('.burger-menu');
// const overlay = document.querySelector('.menu');

// burgerMenu.addEventListener('click', function () {
//   this.classList.toggle('close');
//   overlay.classList.toggle('overlay');
// });
