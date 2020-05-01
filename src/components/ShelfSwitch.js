import React, { Component } from "react";
import PropTypes from "prop-types";

class ShelfSwitch extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    books: PropTypes.array.isRequired,
    shelfSwitch: PropTypes.func.isRequired
  };

  updateShelf = event =>
    this.props.shelfSwitch(this.props.book, event.target.value);

  render() {
    const { book, books } = this.props;

    let currentShelf = "none";

    for (let item of books) {
      if (item.id === book.id) {
        currentShelf = item.shelf;
        break;
      }
    }

    return (
      <div className="book-shelf-changer">
        <select onChange={this.updateShelf} defaultValue={currentShelf}>
          <option value="disabled" disabled>
            Move to...
          </option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    );
  }
}

export default ShelfSwitch;
