import React, { Component } from "react";
import PropTypes from "prop-types";
import Book from "./Book";

class Shelf extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    shelfSwitch: PropTypes.func.isRequired
  };

  render() {
    const { books, shelfSwitch } = this.props;

    return (
      <ol className="books-grid">
        {books.map(book => (
          <Book
            book={book}
            books={books}
            key={book.id}
            shelfSwitch={shelfSwitch}
          />
        ))}
      </ol>
    );
  }
}

export default Shelf;
