import { hideAddToLSButton, showAddToLSButton } from './handle-book-click';
import { LOCAL_STORAGE_KEY, load, save } from './storage';

const refs = {
  actionLSBtn: document.querySelector('.js-modal-buttons'),
};

refs.actionLSBtn.addEventListener('click', onActionLSBtnClick);

function onActionLSBtnClick(e) {
  const savedBooksId = load(LOCAL_STORAGE_KEY);
  const booksId = savedBooksId ? savedBooksId : [];
  const targetId = e.target.id;
  let booksIdForSave = null;
  const isBookIdInLocalStorage = booksId.some(id => id === targetId);
  if (isBookIdInLocalStorage) {
    booksIdForSave = booksId.filter(id => id !== targetId);
    showAddToLSButton();
  } else {
    booksIdForSave = [...booksId, targetId];
    hideAddToLSButton();
  }

  save(LOCAL_STORAGE_KEY, booksIdForSave);
}
