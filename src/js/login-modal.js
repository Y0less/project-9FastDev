const refs = {
  signUpBtn: document.querySelector('.js-sign-up'),
  backdrop: document.querySelector('.js-sign-up-backdrop'),
  closeModalBtn: document.querySelector('.js-sign-up-close'),
};

refs.signUpBtn.addEventListener('click', onSignUpBtnClick);

function onSignUpBtnClick(e) {
  e.preventDefault();
  showModalWin(refs.backdrop);
}

function showModalWin(element) {
  element.classList.remove('is-hidden');
  document.body.style.overflow = 'hidden';
  document.addEventListener('keydown', onEscPress);
  element.addEventListener('click', onBackdropClick);
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
