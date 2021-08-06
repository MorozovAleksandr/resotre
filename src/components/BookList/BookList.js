import React from 'react';
import './BookList.css'
import BookListItem from '../BookListItem/BookListItem';
import withBookStoreService from '../Hoc/withBookStoreService';
import { fetchBooks, bookAddedToCart } from '../../actions/index'
import { connect } from 'react-redux';
import ErrorIndicator from '../ErrorIndicator/ErrorIndicator'
import Spinner from '../Spinner/Spinner'

const BookList = ({ books, onAddedToCart }) => {
    const renderBooks = books.map(book => {
        return (
            <li key={book.id}>
                <BookListItem book={book} onAddedToCart={() => onAddedToCart(book.id)} />
            </li>
        )
    })
    return (
        <ul className="BookList">
            {renderBooks}
        </ul>
    )
}

class BookListContainer extends React.Component {

    componentDidMount() {
        const { fetchBooks } = this.props;
        fetchBooks();

    }

    render() {
        const { books, loading, error, onAddedToCart } = this.props;

        if (loading) {
            return <Spinner />
        }

        if (error) {
            return <ErrorIndicator />
        }

        return <BookList books={books} onAddedToCart={onAddedToCart} />
    }
}

const mapStateToProps = ({ bookList: { books, loading, error } }) => {
    return {
        books,
        loading,
        error
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {

    const { bookStoreService } = ownProps;

    return {
        fetchBooks: fetchBooks(bookStoreService, dispatch),
        onAddedToCart: (id) => dispatch(bookAddedToCart(id))
    }
}

export default withBookStoreService()(connect(mapStateToProps, mapDispatchToProps)(BookListContainer));