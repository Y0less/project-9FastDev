import booksApiService from './books-service';
import loadingToogle from './loader';
// // Використовуємо методи booksApiService.fetchCategoryList(), booksApiService.fetchTopBooks(),booksApiService.fetchCategory(category), booksApiService.fetchBookById(bookId) для HTTP-запитів

import {
  categoriesTitle,
  createMarkupBookGroup,
  createMarkupTopBooks,
  topBooksList,
} from './home';
const param = {
  categoriesSection: document.querySelector('.all-categories'),
  bookCategoriesList: document.querySelector('.all-categories-list'),
  bookCategory: document.querySelector('.category'),
};
export const { categoriesSection, bookCategoriesList, bookCategory } = param;

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
  const sortedCategories = bookCategories.sort((a, b) =>
    a.list_name.localeCompare(b.list_name)
  );
  const arrForMarkup = sortedCategories.map(
    ({ list_name: bookCategoryName }) => {
      return `<li id="${bookCategoryName}" class="category">${bookCategoryName}</li>`;
    }
  );
  bookCategoriesList.innerHTML = arrForMarkup.join(' ');
}
createMarkupBookCategory();

//function for add event listener for click on book category in sidebar
categoriesSection.addEventListener('click', selectMarkupBookGroup);

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
  topBooksList.innerHTML = '';
  loadingToogle();
  if (evt.target.className === 'category') {
    categoriesTitle.classList.remove('chosen-category');
    const listGroups = [...bookCategoriesList.children];
    listGroups.forEach(elem => {
      if (elem.classList.contains('chosen-category')) {
        elem.classList.remove('chosen-category');
      }
    });
    evt.target.classList.add('chosen-category');
    const category = evt.target.textContent;
    const booksOfCategory = await fetchBooksOfCategory(category);
    createMarkupBookGroup(booksOfCategory, category);
  } else if (evt.target.className === 'all-categories-title') {
    createMarkupTopBooks();
  }
  loadingToogle();
}
