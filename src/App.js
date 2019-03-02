import React, { Component } from 'react';
import './App.css';

import SearchBar from './SearchBar/SearchBar'
import BookList from './BookList/BookList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        searchTerm: '',
        printType: 'all',
        bookType: 'free-ebooks',
        bookData: []
    }
  }

  searchTermUpdate(term) {
    this.setState({
      searchTerm: term
    });
  }

  printTypeUpdate(printType) {
    this.setState({
      printType
    });
  }

  bookTypeUpdate(bookType) {
    this.setState({
      bookType
    })
  }

  formatQueryParams(params) {
    const queryItems = Object.keys(params)
      .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
    return queryItems.join('&');
  }

  getBookData() {
    const params = {
      key: 'AIzaSyCbgF6MMYZ2YfCniGl5xZOX-H42R75joDg',
      q: this.state.searchTerm,
      filter: this.state.bookType,
      printType: this.state.printType
    };
    const queryString = this.formatQueryParams(params)
    const url = 'https://www.googleapis.com/books/v1/volumes?' + queryString;
  
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then(data => {
        this.setState({
          bookData: data.items
        })
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <main className='App'>
        <SearchBar
          searchTermUpdate={term => this.searchTermUpdate(term)}
          printTypeUpdate={printType => this.printTypeUpdate(printType)}
          bookTypeUpdate={bookType => this.bookTypeUpdate(bookType)}
          getBookData={e => this.getBookData()}
        />
        <BookList
          bookDataDisplay={this.state.bookData}
        />
      </main>
    );
  }
}

export default App;
