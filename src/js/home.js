import booksApiService from './books-service';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import loadingToogle from './loader';
// Використовуємо методи booksApiService.fetchCategoryList(), booksApiService.fetchTopBooks(),booksApiService.fetchCategory(category), booksApiService.fetchBookById(bookId) для HTTP-запитів
const param = {
  topBooksList: document.querySelector('.best-books'),
  mainPage: document.querySelector('.main-content'),
  categoriesTitle: document.querySelector('.all-categories-title'),
};
export const { topBooksList, mainPage, categoriesTitle } = param;

// fetch data Top Books  for main page
async function fetchBooks() {
  let data = null;
  try {
    data = await booksApiService.fetchTopBooks();
  } catch (error) {
    fetchError(error);
  }
  return data;
}

// markup for Top Books lists on main page

export async function createMarkupTopBooks() {
  loadingToogle();
  categoriesTitle.classList.add('chosen-category');
  const bookCategoriesList = document.querySelector('.all-categories-list');
  const listGroups = [...bookCategoriesList.children];
  listGroups.forEach(elem => {
    if (elem.classList.contains('chosen-category')) {
      elem.classList.remove('chosen-category');
    }
  });

  const arrTopBooks = await fetchBooks();
  const homeHeder = document.querySelector('.home-title');
  homeHeder.remove();

  const string = `<h1 class="home-title">
      Best Sellers <span class="home-title-part"> Books </span>
    </h1>`;
  mainPage.insertAdjacentHTML('afterbegin', string);
  createMarkupBookCategories(arrTopBooks, createMarkupBooksList);

  addEventListenerForBTN();
  loadingToogle();
}
createMarkupTopBooks();

function addEventListenerForBTN() {
  const buttons = document.querySelectorAll('.best-books-btn');
  buttons.forEach(btn => btn.addEventListener('click', handleBtnClick));
}
function createMarkupBooksList(bookslist) {
  const markupBooks = bookslist.map(({ author, book_image, title, _id }) => {
    return ` <li id=${_id} class="js-book best-books-link">
                        <img class="best-book-icon" src="${book_image}" alt="${title}"/>
                    <div class="overlay">
                    <p class="overlay-text">
                      quick view 
                    </p>
                  </div>
                    <h3 class="best-book-title">${title}</h3>
                    <p class="best-book-author">${author}</p>
                  </li>`;
  });
  return markupBooks.join(' ');
}
// const image = imageFromBack ? imageFromBack : defaultImage;

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
  loadingToogle();
  pagePosition();

  const books = await fetchTargetCategory(evt);
  stylizeCategoriesList(evt);
  createBestsellersPage(books, evt);
  loadingToogle();
}

function pagePosition() {
  window.scrollTo(0, 0);
}

async function fetchTargetCategory(event) {
  let data = null;
  topBooksList.innerHTML = '';
  try {
    const targetCategory = event.target.id;
    data = await booksApiService.fetchCategory(targetCategory);
  } catch (error) {
    fetchError(error);
  }
  return data;
}
function stylizeCategoriesList(event) {
  const targetCategory = event.target.id;
  categoriesTitle.classList.remove('chosen-category');
  const bookCategoriesList = document.querySelector('.all-categories-list');
  const listGroups = [...bookCategoriesList.children];
  const stylingCategory = listGroups.find(elem => elem.id === targetCategory);
  stylingCategory.classList.add('chosen-category');
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

function changePageTitle(newtitle) {
  const partsForTitle = separateTitle(newtitle);
  const homeHeder = document.querySelector('.home-title');
  homeHeder.remove();

  const string = `<h1 class="home-title">
      ${partsForTitle[0]} <span class="home-title-part"> ${partsForTitle[1]} </span>
    </h1>`;
  mainPage.insertAdjacentHTML('afterbegin', string);
}

function separateTitle(title) {
  const titleArr = title.split(' ');
  const arrForGroupTitle = [];
  if (titleArr.length > 1) {
    arrForGroupTitle.push(titleArr.splice(titleArr.length - 1, 1).join(''));
  }
  arrForGroupTitle.unshift(titleArr.join(' '));
  return arrForGroupTitle;
}

function changeBooksPositioning() {
  topBooksList.classList.replace('best-books', 'category-book-page');
}

function createBookGroupPage(books) {
  const markup = books.map(({ author, book_image, title, _id }) => {
    return ` <li id=${_id} class="js-book group-book-link">
                    <img class="group-book-icon" src="${book_image}" alt="${title}" width = 180px />
                    <h4 class="group-book-title">${title}</h4>
                    <span class="group-book-author">${author}</span>
                  </li>`;
  });
  topBooksList.innerHTML = markup.join(' ');
}

// function show error
function fetchError(error) {
  mainPage.innerHTML = '';

  Notify.failure(
    'OOPS!!! Something went wrong! Try reloading the page or select another BOOK CATEGORY!!!',
    {
      position: 'center-center',
      timeout: 3000,
      width: '400px',
      fontSize: '24px',
    }
  );
}
