import React from "react";
import { connect } from "react-redux";
import * as bookActions from "../../redux/actions/bookActions";
import * as authorActions from "../../redux/actions/authorActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import BookList from "./BookList";
import { Redirect } from "react-router-dom";
import Spinner from "../common/Spinner";
import { toast } from "react-toastify";

class BooksPage extends React.Component {
  state = {
    redirectToAddBookPage: false,
  };

  componentDidMount() {
    const { books, authors, actions } = this.props;

    if (books.length === 0) {
      actions.loadBooks().catch((error) => {
        alert("Loading booklist failed" + error);
      });
    }
    if (authors.length === 0) {
      actions.loadAuthors().catch((error) => {
        alert("Loading authors failed" + error);
      });
    }
  }

  handleDeleteBook = async (book) => {
    toast.success("Book deleted");
    try {
      await this.props.actions.deleteBook(book);
    } catch (error) {
      toast.error("Delete failed." + error.message, { autoClose: false });
    }
  };

  render() {
    return (
      <>
        {this.state.redirectToAddBookPage && <Redirect to="/book" />}
        <h2>Books</h2>
        {this.props.loading ? (
          <Spinner />
        ) : (
          <>
            <button
              style={{ marginBottom: 20 }}
              className="btn btn-primary add-book"
              onClick={() => this.setState({ redirectToAddBookPage: true })}
            >
              Add Book
            </button>

            <BookList
              onDeleteClick={this.handleDeleteBook}
              books={this.props.books}
            />
          </>
        )}
      </>
    );
  }
}

BooksPage.propTypes = {
  authors: PropTypes.array.isRequired,
  books: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  return {
    books:
      state.authors.length === 0
        ? []
        : state.books.map((book) => {
            return {
              ...book,
              authorName: state.authors.find((a) => a.id === book.authorId)
                .name,
            };
          }),
    authors: state.authors,
    loading: state.apiCallsInProgress > 0,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadBooks: bindActionCreators(bookActions.loadBooks, dispatch),
      loadAuthors: bindActionCreators(authorActions.loadAuthors, dispatch),
      deleteBook: bindActionCreators(bookActions.deleteBook, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BooksPage);
