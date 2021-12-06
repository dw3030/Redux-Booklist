import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { loadBooks, saveBook } from "../../redux/actions/bookActions";
import { loadAuthors } from "../../redux/actions/authorActions";
import PropTypes from "prop-types";
import BookForm from "./BookForm";
import { newBook } from "../../../tools/mockData";
import BookList from "./BookList";

function ManageBookPage({
  books,
  authors,
  loadAuthors,
  loadBooks,
  saveBook,
  history,
  ...props
}) {
  const [book, setBook] = useState({ ...props.book });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (books.length === 0) {
      loadBooks().catch((error) => {
        alert("Loading books failed" + error);
      });
    } else {
      setBook({ ...props.book });
    }

    if (authors.length === 0) {
      loadAuthors().catch((error) => {
        alert("Loading authors failed" + error);
      });
    }
  }, [props.book]);

  function handleChange(e) {
    const { name, value } = e.target;
    setBook((prevBook) => ({
      ...prevBook,
      [name]: name === "authorId" ? parseInt(value, 10) : value,
    }));
  }

  function handleSave(e) {
    e.preventDefault();
    saveBook(book).then(() => {
      history.push("/books");
    });
  }

  return (
    <BookForm
      book={book}
      errors={errors}
      authors={authors}
      onChange={handleChange}
      onSave={handleSave}
    />
  );
}

ManageBookPage.propTypes = {
  book: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired,
  books: PropTypes.array.isRequired,
  loadBooks: PropTypes.func.isRequired,
  loadAuthors: PropTypes.func.isRequired,
  saveBook: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

export function getBookBySlug(books, slug) {
  return books.find((book) => book.slug === slug) || null;
}

function mapStateToProps(state, ownProps) {
  const slug = ownProps.match.params.slug;
  const book =
    slug && state.books.length > 0 ? getBookBySlug(state.books, slug) : newBook;
  return {
    book: book,
    books: state.books,
    authors: state.authors,
  };
}

const mapDispatchToProps = {
  loadBooks: loadBooks,
  loadAuthors: loadAuthors,
  saveBook: saveBook,
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageBookPage);
