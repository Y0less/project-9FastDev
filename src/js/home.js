const param = {
  topBooksList: document.querySelector('.best-books'),
  mainPage: document.querySelector('.main-content'),
};
const { topBooksList, mainPage } = param;
class BooksApiService {
  #BASE_URL = 'https://books-backend.p.goit.global/books/';

  fetchCategoryList() {
    return fetch(`${this.#BASE_URL}category-list`).then(response => {
      if (!response.ok) {
        console.log(response);
        console.log(response.statusText);
        throw new Error(response.statusText);
      }
      return response.json();
    });
  }

  fetchTopBooks() {
    return fetch(`${this.#BASE_URL}top-books`).then(response => {
      if (!response.ok) {
        console.log(response);
        console.log(response.statusText);
        throw new Error(response.statusText);
      }
      return response.json();
    });
  }

  fetchCategory(category) {
    const searchParams = new URLSearchParams({
      category,
    });

    return fetch(`${this.#BASE_URL}category?${searchParams}`).then(response => {
      if (!response.ok) {
        console.log(response);
        console.log(response.statusText);
        throw new Error(response.statusText);
      }
      return response.json();
    });
  }

  fetchBookById(bookId) {
    return fetch(`${this.#BASE_URL}${bookId}`).then(response => {
      if (!response.ok) {
        console.log(response);
        console.log(response.statusText);
        throw new Error(response.statusText);
      }
      return response.json();
    });
  }
}

const booksApiService = new BooksApiService();
// fetch data Top Books  for main page
async function fetchBooks() {
  let data = null;
  try {
    data = await booksApiService.fetchTopBooks();
  } catch (error) {
    console.log(error);
  }
  return data;
}

// markup for Top Books lists on main page

async function createMarkupTopBooks() {
  const arrTopBooks = await fetchBooks();
  createMarkupBookCategories(arrTopBooks, createMarkupBooksList);

  addEventListenerForBTN();
}
createMarkupTopBooks();

function addEventListenerForBTN() {
  const buttons = document.querySelectorAll('.best-books-btn');
  buttons.forEach(btn => btn.addEventListener('click', handleBtnClick));
}
function createMarkupBooksList(bookslist) {
  const markupBooks = bookslist.map(({ author, book_image, title }) => {
    return ` <li>
                    <img class="best-book-icon" src="${book_image}" alt="${title}" width = 180px />
                    <h3 class="best-book-title">${title}</h3>
                    <span class="best-book-author">${author}</span>
                  </li>`;
  });
  return markupBooks;
}

function createMarkupBookCategories(bookCategories, callback) {
  const arrForMarkup = bookCategories.map(({ books, list_name }) => {
    const markupCategories = `  <div class="best-books-sections">
            <h2 class="best-books-heder">${list_name}</h2>
            <ul class="best-books-list">
                      ${callback(books)}
            </ul>
            <button type="submit" id="${list_name}" class="best-books-btn">SEE MORE</button>
          </div>`;

    return markupCategories;
  });
  topBooksList.innerHTML = arrForMarkup.join(' ');
}

//function for add event listener for click button SEE MORE

async function handleBtnClick(evt) {
  pagePosition();

  const books = await fetchTargetCategory(evt);

  createBestsellersPage(books, evt);
}

function pagePosition() {
  window.scrollTo(0, 0);
}

async function fetchTargetCategory(event) {
  let data = null;
  try {
    const targetCategory = event.target.id;
    data = await booksApiService.fetchCategory(targetCategory);
  } catch (error) {
    console.log(error);
  }
  return data;
}

function createBestsellersPage(booklist, event) {
  if (booklist) {
    const targetCategory = event.target.id;
    createMarkupBookGroup(booklist, targetCategory);
  }
}

// markup for  list books of category  on main page

export function createMarkupBookGroup(data, groupName) {
  changePageTitle(groupName);
  createBookGroupPage(data);
  changeBooksPositioning();
}

export function changePageTitle(newtitle) {
  mainPage.firstElementChild.textContent = `${newtitle}`;
}

export function changeBooksPositioning() {
  topBooksList.classList.replace('best-books', 'category-book-page');
}

export function createBookGroupPage(books) {
  const markup = books.map(({ author, book_image, title }) => {
    return ` <li>
                    <img class="best-book-icon" src="${book_image}" alt="${title}" width = 180px />
                    <h4 class="best-book-title">${title}</h4>
                    <span class="best-book-author">${author}</span>
                  </li>`;
  });
  topBooksList.innerHTML = markup.join(' ');
}
