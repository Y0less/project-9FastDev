import { LS_AUTH_KEY, load } from './storage';

const refs = {
  signUpBtn: document.querySelector('.js-sign-up'),
  mobSignUpBtn: document.querySelector('.modal-sign-up'),
  backdrop: document.querySelector('.js-sign-up-backdrop'),
  closeModalBtn: document.querySelector('.js-sign-up-close'),
};

refs.mobSignUpBtn.addEventListener('click', onSignUpBtnClick);
refs.signUpBtn.addEventListener('click', onSignUpBtnClick);

function onSignUpBtnClick(e) {
  e.preventDefault();
  !load(LS_AUTH_KEY)?.token && showModalWin();
}

function showModalWin() {
  refs.backdrop.classList.remove('is-hidden');
  document.body.style.overflow = 'hidden';
  document.addEventListener('keydown', onEscPress);
  refs.backdrop.addEventListener('click', onBackdropClick);
  refs.closeModalBtn.addEventListener('click', onCloseModalBtnClick);
}

function onCloseModalBtnClick() {
  refs.backdrop.classList.add('is-hidden');
  document.body.style.overflow = '';
  document.removeEventListener('keydown', onEscPress);
  refs.backdrop.removeEventListener('click', onBackdropClick);
}

function onBackdropClick(e) {
  if (e.currentTarget === e.target) {
    onCloseModalBtnClick();
  }
}

function onEscPress(e) {
  if (e.code === 'Escape') {
    onCloseModalBtnClick();
  }
}

export { showModalWin };
