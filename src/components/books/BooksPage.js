import React from "react";
import { connect } from "react-redux";
import * as BookActions from "../../redux/actions/BookActions";
import PropTypes from "prop-types";

class BooksPage extends React.Component {
  state = {
    book: {
      title: "",
    },
  };

  handleChange = (e) => {
    const book = { ...this.state.book, title: e.target.value };
    this.setState({ book: book });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.dispatch(BookActions.createBook(this.state.book));
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Books</h2>
        <h3>Add Book to the List</h3>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.book.title}
        />
        <input type="submit" value="Save" />
        {this.props.books.map((book) => (
          <div key={book.title}>{book.title}</div>
        ))}
      </form>
    );
  }
}

BooksPage.propTypes = {
  books: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    books: state.books,
  };
}

export default connect(mapStateToProps)(BooksPage);
