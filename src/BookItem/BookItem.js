import React from 'react';

import './BookItem.css';

function BookItem(props) {

    const saleInfo = props.saleInfo.listPrice ? props.saleInfo.listPrice.amount : 'Free'
    return (
        <div className="book_item">
            <div className="book_titleheader">
                <img 
                    src={props.volumeInfo.imageLinks.smallThumbnail}
                    alt={props.volumeInfo.title}
                />
                <a 
                    href={props.saleInfo.buyLink} 
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h2>{props.volumeInfo.title} </h2>
                </a>
                <p>Author: {props.volumeInfo.authors}</p>
                <p>Cost (USD): {saleInfo}</p>
            <div className="bookmark__description">
                {props.searchInfo.description}
            </div>
        </div>
        </div>
    )
}

export default BookItem;