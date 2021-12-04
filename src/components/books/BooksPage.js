import React from "react";

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
    alert(this.state.book.title);
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
      </form>
    );
  }
}

export default BooksPage;
