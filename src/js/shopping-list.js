import { Notify } from 'notiflix/build/notiflix-notify-aio';
import booksApiService from './books-service';
import { save, load, LOCAL_STORAGE_KEY } from './storage';
import mobileImg from '../images/shopping-list/mobile.png';
import mobileREtinaImg from '../images/shopping-list/mobile@2x.png';
import tabletDeskImg from '../images/shopping-list/tablet-desck.png';
import tabletDesckRetinaImg from '../images/shopping-list/tablet-desck@2x.png';
import amazonImg from '../images/books-links/amazon.png';
import appleImg from '../images/books-links/apple-books.png';
import bookshopImg from '../images/books-links/bookshop.png';
import sprite from '../images/icons.svg';

const refs = {
  listEl: document.querySelector('.js-shopping-list'),
};

const savedBooks = load(LOCAL_STORAGE_KEY);
const booksId = savedBooks ? savedBooks : [];

if (!booksId.length) {
  refs.listEl.innerHTML = createDefault();
} else {
  getBooks(booksId);
}

async function getBooks(ids) {
  try {
    const booksPromise = ids.map(id => booksApiService.fetchBookById(id));
    const result = await Promise.allSettled(booksPromise);
    const books = result.map(({ value }) => value);
    const markup = createBooksMarkup(books);
    refs.listEl.innerHTML = markup;
    refs.listEl.addEventListener('click', handlerRemove);
  } catch (error) {
    Notify.failure('HTTP request failed');
  }
}

function handlerRemove(e) {
  const booksId = load(LOCAL_STORAGE_KEY);
  if (!e.target.closest('.js-remove')) {
    return;
  }
  const id = e.target.closest('[id]').id;
  refs.listEl.querySelector(`[data-id='${id}']`).remove();
  const updateBooksId = booksId.filter(bookId => bookId !== id);
  save(LOCAL_STORAGE_KEY, updateBooksId);
  if (!load(LOCAL_STORAGE_KEY).length) {
    refs.listEl.innerHTML = createDefault();
  }
}

function createBooksMarkup(books) {
  return books
    .map(
      ({
        _id,
        book_image,
        list_name,
        description,
        author,
        buy_links,
        title,
      }) => {
        const amazonLink = buy_links.find(({ name }) =>
          name.toLowerCase().includes('amazon')
        ).url;
        const appleBooksLink = buy_links.find(({ name }) =>
          name.toLowerCase().includes('apple')
        ).url;
        const bookshopLink = buy_links.find(({ name }) =>
          name.toLowerCase().includes('bookshop')
        ).url;
        return `
     <li data-id="${_id}" class="js-book"><div><img src="${book_image}" alt="${title}" width="" height=""/></div><div><h2>${title}</h2><p>${list_name}</p><p>${description}</p><div><p>${author}</p><ul><li><a href="${amazonLink}" target="_blank" rel="noreferrer noopener"><img src="${amazonImg}" alt="icon of Amazon" width="" height=""/></a></li><li><a href="${appleBooksLink}" target="_blank" rel="noreferrer noopener"><img src="${appleImg}" alt="icon of Apple-books" width="" height="" /></a></li><li><a href="${bookshopLink}" target="_blank" rel="noreferrer noopener"><img src="${bookshopImg}" alt="icon of bookshop" width="" height="" /></a></li></ul></div><button id=${_id} class="js-remove" type= "button"><svg class="icon-remove" width="18px" height="18px"><use href="${sprite}#icon-dump"></use></svg></button></div></li>`;
      }
    )
    .join('');
}

function createDefault() {
  return `<div><p>This page is empty, add some books and proceed to order.</p><picture><source
          srcset="${tabletDeskImg} 1x, ${tabletDesckRetinaImg} 2x"
          media="(min-width: 768px)"
        />
        <source
          srcset="
            ${mobileImg}   1x,
            ${mobileREtinaImg} 2x
          "
          media="(min-width: 320px)"
        />
        <img
          src="${mobileImg}"
          alt="stack of books"
          width="265"
          height="198"
        />
      </picture>
          </div>`;
}
