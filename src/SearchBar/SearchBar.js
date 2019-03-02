import React from 'react';

import './SearchBar.css'

import SearchInput from '../SearchInput/SearchInput';

class SearchBar extends React.Component {

    render() {
        return (
            <div>
               <div className="SearchBar__heading">
                    <h1>Google Book Search</h1>
                    <SearchInput
                        searchTermUpdate={this.props.searchTermUpdate}
                        printTypeUpdate={this.props.printTypeUpdate}
                        bookTypeUpdate={this.props.bookTypeUpdate}
                        getBookData={this.props.getBookData}
                    />
                </div> 
            </div>
        )
    }
}

export default SearchBar;