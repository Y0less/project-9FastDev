console.log('Hello All Categories');
import { createMarkupBookGroup } from './home';
const param = {
  bookCategoriesList: document.querySelector('.all-categories-list'),
};
const { bookCategoriesList } = param;

// fetch for category list for sidebar

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
// fetch for all book categories  for sidebar
async function fetchCategories() {
  let data = null;
  try {
    data = await booksApiService.fetchCategoryList();
    // createMarkupBookCategory(data);
  } catch (error) {
    console.log(error);
  }
  return data;
}

// markup for all categories list in sidebar

async function createMarkupBookCategory() {
  const bookCategories = await fetchCategories();
  const arrForMarkup = bookCategories.map(({ list_name: bookCategoryName }) => {
    return `<li>
          <span class="category">${bookCategoryName}</span>
                    </li>`;
  });
  bookCategoriesList.innerHTML = arrForMarkup.join(' ');
}
createMarkupBookCategory();

//function for add event listener for click on book category in sidebar
bookCategoriesList.addEventListener('click', selectMarkupBookGroup);

// fetch for all book in  category
async function fetchBooksOfCategory(targetCategory) {
  let data = null;
  try {
    data = await booksApiService.fetchCategory(targetCategory);
  } catch (error) {
    console.log(error);
  }
  return data;
}

async function selectMarkupBookGroup(evt) {
  if (evt.target.className === 'category') {
    const category = evt.target.textContent;
    const booksOfCategory = await fetchBooksOfCategory(category);
    createMarkupBookGroup(booksOfCategory, category);
  }
}
