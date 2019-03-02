import React from 'react';

import './BookList.css';

import BookItem from '../BookItem/BookItem';

class BookList extends React.Component {
    render() {
        const books = this.props.bookDataDisplay
            .map( (book, i ) => <BookItem { ...book } key={i}/>)

        return (
            <div className="books_container">
                {books}
            </div>
        )
    }
}

export default BookList;