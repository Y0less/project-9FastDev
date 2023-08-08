import { save, load, remove } from './storage';
import { save, load, remove } from './storage';

// Функція для відкриття/

const refs = {
  openModalBtn: document.querySelector('[data-modal-open]'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  modal: document.querySelector('[data-header-modal]'),
};

refs.openModalBtn.addEventListener('click', toggleModal);
refs.closeModalBtn.addEventListener('click', toggleModal);

function toggleModal() {
  refs.modal.classList.toggle('is-open');
  refs.openModalBtn.classList.toggle('is-close');
}

// Функція для active-page
const currentURL = window.location.href;
const links = document.querySelectorAll('nav a');

function setActiveLink() {
  links.forEach(link => {
    if (link.href === currentURL) {
      link.classList.add('active-page');
    }
  });
}
// window.addEventListener('load', setActiveLink);
setActiveLink();
