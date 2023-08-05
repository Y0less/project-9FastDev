import { save, load, LOCAL_STORAGE_KEY } from './storage';
import mobileImg from '../images/shopping-list/mobile.png'
import mobileREtinaImg from '../images/shopping-list/mobile@2x.png'
import tabletDeskImg from '../images/shopping-list/tablet-desck.png'
import tabletDesckRetinaImg from '../images/shopping-list/tablet-desck@2x.png'

import amazonImg from '../images/books-links/amazon.png'
import appleImg from '../images/books-links/apple-books.png'
import bookshopImg from '../images/books-links/bookshop.png'

import sprite from '../images/icons.svg'



const refs = {
    listEl: document.querySelector('.js-shopping-list')
}

refs.listEl.innerHTML = createMarkup(bookSave);
refs.listEl.addEventListener('click', handlerRemove);

const bookSave = load(LOCAL_STORAGE_KEY)?load(LOCAL_STORAGE_KEY):[];

if (!bookSave.length) { 
  refs.listEl.innerHTML = createDefault();
  return;
}


function handlerRemove(evt) { 
if (!evt.target.classList.contains('js-remove'))
        return
    const book = evt.target.closest('.js-book');
    const bookId = Number(book.dataset.id)
    const idx = bookSave.findIndex(({ _id }) => _id === bookId)
    if (!!~idx) {
        bookSave.splice(idx, 1)
        save(LOCAL_STORAGE_KEY, bookSave)
        refs.listEl.innerHTML = createMarkup(bookSave);
    }
}


function createMarkup(arr) {
    return arr.map(({ _id, book_image, list_name, description, author, buy_links }) => `
     <li data-id="${_id}" class="js-book">
              <div>
                <img src="${book_image}" alt="${title}" width="" height=""/>
              </div>
              <div>
                <h2>${title}</h2>
                <p>${list_name}</p>
                <p>${description}</p>
                <div>
                  <p>${author}</p>
                  <ul>
                  <li>
                    <a href="${buy_links[0].url}">
                        <img src="${amazonImg}" alt="icon of Amazon" width="" height=""/>
                    </a>
                    </li>
                    <li>
                    <a href="${buy_links[1].url}">
                        <img src="${appleImg}" alt="icon of Apple-books" width="" height="" />
                    </a>
                    </li>
                    <li>
                    <a href="${buy_links[2].url}">
                        <img src="${bookshopImg}" alt="icon of bookshop" width="" height="" />
                    </a>
                    </li>
                  </ul>
                </div>
                <button class="js-remove" type= "button">
                 <svg class="icon-remove" width="18px" height="18px">
                    <use href="${sprite}#icon-dump"></use>
                </svg>
                </button>
              </div>
            </li>`).join('')
}


function createDefault() { 

  return `<div>
            <p>This page is empty, add some books and proceed to order.</p>
            <picture>
        <source
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
          </div>`
}