import { save, load, remove } from './storage';

// Функція для відкриття/

const refs = {
  openModalBtn: document.querySelector('[data-modal-open]'),
  closeMobileModalBtn: document.querySelector('[data-modal-close]'),
  modal: document.querySelector('[data-header-modal]'),
  pageBody: document.querySelector('body'),
};

console.log('pageBody :>> ', refs.pageBody);

refs.openModalBtn.addEventListener('click', toggleModal);
refs.closeMobileModalBtn.addEventListener('click', toggleModal);

function toggleModal(e) {
  refs.pageBody.classList.toggle('disable-scroll');
  refs.modal.classList.toggle('is-open');
  refs.openModalBtn.classList.toggle('is-close');
  refs.closeMobileModalBtn.classList.toggle('visually-hidden');
}

document.body.scroll = 'no';
// function disableScroll(params) {}

// Функція для active-page

function setActiveLink() {
  const links = document.querySelectorAll('nav a');
  links.forEach(link => {
    link.classList.remove('active-page');
  });

  const currentURL = window.location.href;

  links.forEach(link => {
    if (link.href === currentURL) {
      link.classList.add('active-page');
    }
  });
}
window.addEventListener('load', setActiveLink);

// Функція заборони скролу при відкритті модального вікна (бургер-меню)
