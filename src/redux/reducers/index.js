import { combineReducers } from "redux";
import authors from "./authorReducer";
import books from "./bookReducer";
// note: since the bookReducer fxn is default, we can name import whatever here

const rootReducer = combineReducers({
  books: books,
  authors: authors,
});

export default rootReducer;
