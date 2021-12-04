import * as types from "./actionTypes";
import * as bookApi from "../../api/bookApi";

export function createBook(book) {
  return {
    type: types.CREATE_BOOK,
    book: book,
  };
}

export function loadBookSuccess(books) {
  return { type: types.LOAD_BOOKS_SUCCESS, books: books };
}

export function loadBooks() {
  return function (dispatch) {
    return bookApi
      .getBooks()
      .then((books) => {
        dispatch(loadBookSuccess(books));
      })
      .catch((error) => {
        throw error;
      });
  };
}
