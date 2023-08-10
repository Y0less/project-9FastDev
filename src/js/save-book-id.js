import { hideAddToLSButton, showAddToLSButton } from './handle-book-click';
import { showModalWin } from './login-modal';
import { LOCAL_STORAGE_KEY, LS_AUTH_KEY, load, save } from './storage';

const userIsAuth = load(LS_AUTH_KEY)?.token;

const refs = {
  actionLSBtn: document.querySelector('.js-modal-buttons'),
};

refs.actionLSBtn.addEventListener('click', onActionLSBtnClick);

function onActionLSBtnClick(e) {
  if (!userIsAuth) {
    showModalWin();
    return;
  }
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
