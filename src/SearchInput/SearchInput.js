import React from 'react';
import './SearchInput.css';

class SearchInput extends React.Component {

    handleSubmit(e) {
        e.preventDefault();
        this.props.getBookData();
    }

    render() {
        return (
            <div className="search_input">
                <form
                    className="input_form"
                    onSubmit={e => this.handleSubmit(e)}
                >
                    <div className="search-section top">
                        <label htmlFor="title">Find Book:</label>
                        <input
                            type="text" 
                            name="title"
                            id="title"
                            placeholder="Title"
                            onChange={e => this.props.searchTermUpdate(e.target.value)}
                        />
                    </div>
                        
                    <div className="search-section bottom">
                        <label htmlFor="print_type">Print Type:</label>
                        <select
                            name="print_type"
                            id="print_type"
                            onChange={e => this.props.printTypeUpdate(e.target.value)}
                        >
                            <option defaultValue value="all">All</option>
                            <option value="books">Books</option>
                            <option value="magazines">Magazines</option>
                        </select>

                        <label htmlFor="book_type">Book Type: </label>
                        <select 
                            type="text" 
                            name="book_type" 
                            id="book_type"
                            onChange={e => this.props.bookTypeUpdate(e.target.value)}
                        >
                            <option value="free-ebooks">Free eBooks</option>
                            <option value="paid-ebooks">Paid eBooks</option>
                        </select>
                        <div className="search_button">
                            <button type="submit">Search</button>
                        </div>
                    </div>
                        
                </form>
            </div>
        )
    }
}

export default SearchInput;