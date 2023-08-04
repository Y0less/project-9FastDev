import { load, save } from './storage';

const LOCAL_STORAGE_KEY = 'shoppingList';

const refs = { addToLSBtn: document.querySelector('.modal-add-btn') };

refs.addToLSBtn.addEventListener('click', saveToLocaleStorage);

function saveToLocaleStorage(e) {
  const savedBooksId = load(LOCAL_STORAGE_KEY);
  const booksId = savedBooksId ? savedBooksId : [];
  books.push(e.target.id);
  save(LOCAL_STORAGE_KEY, booksId);
}

console.log(books);
