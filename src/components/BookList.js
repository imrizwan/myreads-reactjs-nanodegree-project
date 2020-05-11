import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Shelf from "./Shelf";

const BookList = props => {
  const { books, shelfSwitch } = props;
  const shelfTypes = [
    { type: "currentlyReading", title: "Currently Reading" },
    { type: "wantToRead", title: "Want to Read" },
    { type: "read", title: "Read" }
  ];
  return (
    <div className="app">
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads - A Book Tracking App</h1>
        </div>
        <div className="list-books-content">
          {shelfTypes.map((shelf, index) => {
            const shelfBooks = books.filter(book => book.shelf === shelf.type);
            return (
              <div className="bookshelf" key={index}>
                <h2 className="bookshelf-title">{shelf.title}</h2>
                <div className="bookshelf-books">
                  <Shelf books={shelfBooks} shelfSwitch={shelfSwitch} />
                </div>
              </div>
            );
          })}
        </div>
        <div className="open-search">
          <Link to="/search">
            <button>Add a book</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

BookList.propTypes = {
  books: PropTypes.array.isRequired,
  shelfSwitch: PropTypes.func.isRequired
};
export default BookList;
