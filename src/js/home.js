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

async function fetchBooks() {
  try {
    const data = await booksApiService.fetchTopBooks();
    createMarkupTopBooks(data);
  } catch (error) {
    console.log(error);
  }
}
fetchBooks();

// markup for Top Books lists on main page

function createMarkupTopBooks(arrTopBooks) {
  const arrForMarkup = arrTopBooks.map(({ books, list_name }) => {
    const markupBooks = books.map(({ author, book_image, title }) => {
      return ` <li>
                    <img class="best-book-icon" src="${book_image}" alt="${title}" width = 180px />
                    <h4 class="best-book-title">${title}</h4>
                    <span class="best-book-author">${author}</span>
                  </li>`;
    });
    const markupCategories = `  <div class="best-books-sections">
            <h3 class="best-books-heder">${list_name}</h3>
            <ul class="best-books-list">
                      ${markupBooks}
            </ul>
            <button type="submit" id="${list_name}" class="best-books-btn">SEE MORE</button>
          </div>`;

    return markupCategories;
  });
  topBooksList.innerHTML = arrForMarkup.join(' ');

  const buttons = document.querySelectorAll('.best-books-btn');
  buttons.forEach(btn => btn.addEventListener('click', loadMoreBooks));
}
//function for add event listener for click button SEE MORE
function loadMoreBooks(evt) {
  const targetCategory = evt.target.id;
  window.scrollTo(0, 0);
  booksApiService
    .fetchCategory(targetCategory)
    .then(data => createMarkupBookGroup(data, targetCategory))
    .catch(err => console.log(err));
}
// markup for  list books of category  on main page
export function createMarkupBookGroup(data, groupName) {
  mainPage.firstElementChild.textContent = `${groupName}`;
  const markup = data.map(({ author, book_image, title }) => {
    return ` <li>
                    <img class="best-book-icon" src="${book_image}" alt="${title}" width = 180px />
                    <h4 class="best-book-title">${title}</h4>
                    <span class="best-book-author">${author}</span>
                  </li>`;
  });
  topBooksList.innerHTML = markup.join(' ');
  topBooksList.classList.replace('best-books', 'category-book-page');
}
