import booksApiService from './books-service';
// // Використовуємо методи booksApiService.fetchCategoryList(), booksApiService.fetchTopBooks(),booksApiService.fetchCategory(category), booksApiService.fetchBookById(bookId) для HTTP-запитів

import { createMarkupBookGroup } from './home';
const param = {
  bookCategoriesList: document.querySelector('.all-categories-list'),
};
const { bookCategoriesList } = param;

// const booksApiService = new BooksApiService();
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
          <span id="${bookCategoryName}" class="category">${bookCategoryName}</span>
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
