import React from "react";
import { connect } from "react-redux";
import * as bookActions from "../../redux/actions/bookActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import BookList from "./BookList";

class BooksPage extends React.Component {
  componentDidMount() {
    this.props.actions.loadBooks().catch((error) => {
      alert("Loading book list failed" + error);
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
    books: state.books,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(bookActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BooksPage);
