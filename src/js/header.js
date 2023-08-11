import { save, load, remove, LOCAL_STORAGE_KEY, LS_AUTH_KEY } from './storage';

// Функція для відкриття/

const refs = {
  regBtn: document.querySelector('.sign-in-up-ig'),
  userProfileCard: document.querySelector('.user-card-container'),
  mobUserProfileCard: document.querySelector('.mob-text-container'),
  logoutBtn: document.querySelector('.logout-btn'),
  openModalBtn: document.querySelector('[data-modal-open]'),
  closeMobileModalBtn: document.querySelector('[data-modal-close]'),
  modal: document.querySelector('[data-header-modal]'),
  pageBody: document.querySelector('body'),
  mobRegBtn: document.querySelector('.modal-sign-up'),
  mobLogOutBtn: document.querySelector('.modal-log-out'),
};

(() => {
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) {
      refs.userProfileCard.style.display = 'none';
      load(LS_AUTH_KEY)?.token && (refs.mobRegBtn.style.display = 'none');
      return;
    }
    load(LS_AUTH_KEY)?.token && (refs.userProfileCard.style.display = 'block');
  });
})();

refs.openModalBtn.addEventListener('click', toggleModal);
refs.closeMobileModalBtn.addEventListener('click', toggleModal);
refs.userProfileCard.addEventListener('click', showLogOutBtn);
refs.logoutBtn.addEventListener('click', onLogOutBtnClick);
refs.mobLogOutBtn.addEventListener('click', onLogOutBtnClick);

function onLogOutBtnClick() {
  remove(LS_AUTH_KEY);
  refs.userProfileCard.style.display = 'none';
  refs.regBtn.style.display = 'flex';
  refs.mobRegBtn.style.display = 'flex';
  refs.mobUserProfileCard.style.display = 'none';
}

function showLogOutBtn() {
  refs.logoutBtn.classList.toggle('is-hidden');
}

function toggleModal() {
  refs.pageBody.classList.toggle('disable-scroll');
  refs.modal.classList.toggle('is-open');
  refs.openModalBtn.classList.toggle('is-close');
  refs.closeMobileModalBtn.classList.toggle('visually-hidden');
}

// function setActiveLink() {
//   const links = document.querySelectorAll('nav a');
//   links.forEach(link => {
//     link.classList.remove('active-page');
//   });

//   const currentURL = window.location.href;

//   links.forEach(link => {
//     if (link.href === currentURL) {
//       link.classList.add('active-page');
//     }
//   });
// }
// window.addEventListener('load', setActiveLink);

// Функція заборони скролу при відкритті модального вікна (бургер-меню)
