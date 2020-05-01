import React from "react";
import PropTypes from "prop-types";
import ShelfSwitch from "./ShelfSwitch";
import coverImage from "../images/coverImage.png";

const Book = props => {
  const { book, books, shelfSwitch } = props;
  const defaultImage =
    book.imageLinks && book.imageLinks.thumbnail
      ? book.imageLinks.thumbnail
      : coverImage;
  const title = book.title ? book.title : "No title available";

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${defaultImage})`
            }}
          />
          <ShelfSwitch book={book} books={books} shelfSwitch={shelfSwitch} />
        </div>
        <div className="book-title">{title}</div>
        {book.authors &&
          book.authors.map((author, index) => (
            <div className="book-authors" key={index}>
              {author}
            </div>
          ))}
      </div>
    </li>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
  books: PropTypes.array.isRequired,
  changeShelf: PropTypes.func.isRequired
};

export default Book;
