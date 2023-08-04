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
    populateModalWin(book);
    showModalWin();
  } catch (error) {
    console.log(error);
  }
}

function populateModalWin(book) {
  const { title, author, description, book_image, buy_links: buyLinks } = book;
  const bookImage = refs.modalWin.querySelector('img');
  const bookTitle = refs.modalWin.querySelector('.modal-book-title');
  const bookAuthor = refs.modalWin.querySelector('.modal-book-author');
  const bookDescription = refs.modalWin.querySelector(
    '.modal-book-description'
  );
  const shopLinks = refs.modalWin.querySelectorAll('.modal-links-link');
  bookImage.src = book_image;
  bookImage.alt = title;
  bookTitle.textContent = title;
  bookAuthor.textContent = author;
  bookDescription.textContent = description
    ? description
    : 'book description missing';
  console.log(shopLinks);
  console.log(refs.modalWin);
  shopLinks.forEach(link => {
    const shopLink = buyLinks.find(({ name }) =>
      name.toLowerCase().includes(link.id)
    ).url;
    link.href = shopLink;
  });
}

function showModalWin() {
  refs.backdrop.classList.remove('is-hidden');
}
