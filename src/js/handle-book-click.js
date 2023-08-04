//обробити помилку запиту
import booksApiService from './books-service';

const refs = {
  booksList: document.querySelector('.js-books-list'),
  backdrop: document.querySelector('.backdrop'),
  modalWin: document.querySelector('.modal-window'),
};

refs.booksList.addEventListener('click', onBookClick);

async function onBookClick(e) {
  const targetBook = e.target.closest('.js-book');

  if (!targetBook) {
    return;
  }

  try {
    const book = await booksApiService.fetchBookById(targetBook.id);
    populateModalWin(book, refs.modalWin);
    showModalWin(refs.backdrop);
  } catch (error) {
    console.log(error);
  }
}

function populateModalWin(book, modalWin) {
  const {
    title,
    author,
    description,
    book_image,
    buy_links: buyLinks,
    _id,
  } = book;
  const bookImage = modalWin.querySelector('img');
  const bookTitle = modalWin.querySelector('.modal-book-title');
  const bookAuthor = modalWin.querySelector('.modal-book-author');
  const bookDescription = modalWin.querySelector('.modal-book-description');
  const shopLinks = modalWin.querySelectorAll('a');
  const addBtn = modalWin.querySelectorAll('.modal-add-btn');
  bookImage.src = book_image;
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
  addBtn.id = _id;
}

function showModalWin(element) {
  element.classList.remove('is-hidden');
  document.body.style.overflow = '';
}
