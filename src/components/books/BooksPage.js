import React from "react";
import { connect } from "react-redux";
import * as bookActions from "../../redux/actions/bookActions";
import * as authorActions from "../../redux/actions/authorActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import BookList from "./BookList";

class BooksPage extends React.Component {
  componentDidMount() {
    this.props.actions.loadBooks().catch((error) => {
      alert("Loading booklist failed" + error);
    });

    this.props.actions.loadAuthors().catch((error) => {
      alert("Loading authors failed" + error);
    });
  }

  render() {
    return (
      <>
        <h2>Books</h2>
        <BookList books={this.props.books} />
      </>
    );
  }
}

BooksPage.propTypes = {
  books: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
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
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadBooks: bindActionCreators(bookActions.loadBooks, dispatch),
      loadAuthors: bindActionCreators(authorActions.loadAuthors, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BooksPage);
