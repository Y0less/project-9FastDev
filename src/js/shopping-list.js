import { save, load, remove } from './storage';

console.log('Hello Shopping List!');

const refs = {
    listEl: document.querySelector('.js-shopping-list')
}

const LS_KEY = 'shoppingList';
const arr = load(LS_KEY);

if (!arr) { 
    refs.listEl.innerHTML = creatreDefault();
}

refs.listEl.innerHTML = createMarkup(arr);
refs.listEl.addEventListener('click', handlerRemove);



function handlerRemove(evt) { 
if (!evt.target.classList.contains('js-remove'))
        return
    const book = evt.target.closest('.js-book');
    const bookId = Number(book.dataset.id)
    const idx = arr.findIndex(({ _id }) => _id === bookId)
    if (!!~idx) {
        arr.splise(idx, 1)
        save(LS_KEY, arr)
        refs.listEl.innerHTML = createMarkup(arr);
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
                        <img src="./images/books-links/amazon.png" alt="icon of Amazon" width="" height=""/>
                    </a>
                    </li>
                    <li>
                    <a href="${buy_links[1].url}">
                        <img src="./images/books-links/apple-books.png" alt="icon of Apple-books" width="" height="" />
                    </a>
                    </li>
                    <li>
                    <a href="${buy_links[2].url}">
                        <img src="./images/books-links/bookshop.png" alt="icon of bookshop" width="" height="" />
                    </a>
                    </li>
 
                  </ul>
                </div>
                <button class="js-remove" type= "button">
                 <svg class="icon-remove" width="18px" height="18px">
                    <use href="./images/"></use>
                </svg>
                </button>
              </div>
            </li>`).join('')
}



function creatreDefault() { 

    return ` <div>
            <img src="./images" alt="stack of books" width="" height=""/>
          </div>`
}