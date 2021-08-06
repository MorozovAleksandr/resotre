import React from 'react';
import './BookListItem.css';

const BookListItem = ({ book, onAddedToCart }) => {
    const { title, author, price, coverImage } = book;

    return (
        <div className="BookListItem">
            <div className="bookCover">
                <img src={coverImage} alt="cover" />
            </div>
            <div className="bookDetails">
                <span className="bookTitle">{title}</span>
                <div className="bookAuthor">{author}</div>
                <div className="bookPrice">${price}</div>
                <button className="btn btn-info addToCart" onClick={onAddedToCart}>Add to cart</button>
            </div>
        </div>
    )
}

export default BookListItem;