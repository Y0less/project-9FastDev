class BooksApiService {
  #BASE_URL = 'https://books-backend.p.goit.global/books/';

  fetchCategoryList() {
    return fetch(`${this.#BASE_URL}category-list`).then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    });
  }

  fetchTopBooks() {
    return fetch(`${this.#BASE_URL}top-books`).then(response => {
      if (!response.ok) {
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
        throw new Error(response.statusText);
      }
      return response.json();
    });
  }

  fetchBookById(bookId) {
    return fetch(`${this.#BASE_URL}${bookId}`).then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    });
  }
}

const booksApiService = new BooksApiService();

export default booksApiService;
