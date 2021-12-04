import { combineReducers } from "redux";
import books from "./bookReducer";
// note: since the bookReducer fxn is default, we can name import whatever here

const rootReducer = combineReducers({
  books: books,
});

export default rootReducer;
