//обробити помилку запиту
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import booksApiService from './books-service';
import { LOCAL_STORAGE_KEY, load } from './storage';
import defaultBookImg from '../images/default-book-cover/default-mobile-book-cover.png';

const refs = {
  booksList: document.querySelector('.js-books-list'),
  backdrop: document.querySelector('.js-backdrop'),
  modalWin: document.querySelector('.js-modal-window'),
  closeModalBtn: document.querySelector('.js-modal-window-close-btn'),
};

refs.booksList.addEventListener('click', onBookClick);

async function onBookClick(e) {
  const targetBook = e.target.closest('.js-book');

  if (!targetBook) {
    return;
  }

  const targetBookId = targetBook.id;

  try {
    const book = await booksApiService.fetchBookById(targetBookId);
    populateModalWin(book, refs.modalWin);
    changeButton(targetBookId);
    showModalWin(refs.backdrop);
  } catch (error) {
    Notify.failure('HTTP request failed');
  }
}

function populateModalWin(book, modalWin) {
  const {
    title,
    author,
    description,
    book_image: bookImg,
    buy_links: buyLinks,
    _id: id,
  } = book;
  const bookImage = modalWin.querySelector('img');
  const bookTitle = modalWin.querySelector('.modal-book-title');
  const bookAuthor = modalWin.querySelector('.modal-book-author');
  const bookDescription = modalWin.querySelector('.modal-book-description');
  const shopLinks = modalWin.querySelectorAll('a');
  const addBtn = modalWin.querySelectorAll('.js-modal-btn');
  bookImage.src = bookImg ? bookImg : defaultBookImg;
  bookImage.alt = title;
  bookTitle.textContent = title;
  bookAuthor.textContent = author;
  bookDescription.textContent = description
    ? description
    : 'book description missing';
  shopLinks.forEach(link => {
    const shopLink = buyLinks.find(({ name }) =>
      name.toLowerCase().includes(link.id)
    ).url;
    link.href = shopLink;
  });
  addBtn.forEach(btn => {
    btn.id = id;
  });
}

function showModalWin(element) {
  element.classList.remove('is-hidden');
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

function changeButton(bookId) {
  const savedBooksId = load(LOCAL_STORAGE_KEY) ? load(LOCAL_STORAGE_KEY) : [];
  if (!savedBooksId.length) {
    return;
  }
  const isBookIdInLocalStorage = savedBooksId.some(id => id === bookId);
  if (isBookIdInLocalStorage) {
    hideAddToLSButton();
    return;
  }
  showAddToLSButton();
}

function hideAddToLSButton() {
  document.querySelector('.js-add-btn').style.display = 'none';
  document.querySelector('.js-remove-btn').style.display = 'block';
  document.querySelector('.js-modal-desc-text').style.display = 'block';
}

function showAddToLSButton() {
  document.querySelector('.js-remove-btn').style.display = 'none';
  document.querySelector('.js-add-btn').style.display = 'block';
  document.querySelector('.js-modal-desc-text').style.display = 'none';
}

export { hideAddToLSButton, showAddToLSButton };
