import { LOCAL_STORAGE_KEY, load, save } from './storage';

const refs = { addToLSBtn: document.querySelector('.modal-add-btn') };

refs.addToLSBtn.addEventListener('click', saveToLocaleStorage);

function saveToLocaleStorage(e) {
  const savedBooksId = load(LOCAL_STORAGE_KEY);
  const booksId = savedBooksId ? savedBooksId : [];
  const targetId = e.target.id;
  const isBookIdInLocalStorage = booksId.some(id => id === targetId);
  const booksIdForSave = isBookIdInLocalStorage
    ? booksId.filter(id => id !== targetId)
    : [...booksId, targetId];
  save(LOCAL_STORAGE_KEY, booksIdForSave);
  console.log(booksIdForSave);
}
