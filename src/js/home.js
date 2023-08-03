console.log('Hello Home!');

import BooksApiService from './books-service';

const booksApiService = new BooksApiService();
export default booksApiService;

// Використовуємо методи booksApiService.fetchCategoryList(), booksApiService.fetchTopBooks(),booksApiService.fetchCategory(category), booksApiService.fetchBookById(bookId) для HTTP-запитів

async function test() {
  try {
    const data = await booksApiService.fetchCategoryList();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

test();

console.log(1);
