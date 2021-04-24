import React, { Component } from 'react';
import TitleBar from './TitleBar/titleBar';
import BookViewer from './BookViewer/bookViewer';
import BookCreator from './BookCreator/bookCreator'

class App extends Component {
    constructor(props) {
        super(props);
        this.books = [
            {title: 'Ready Player One', author: 'Earnest Cline'},
            {title:'All the Light We Cannot See', author: 'Anthony Doerr'},
            {title: 'The First and Last Freedom', author: 'Jiddu Krishamurti'}
        ];
        this.state = {
            bookNumber: 0
        }
    }

    addNewBook(book) {
        this.books.push(book);
        this.setState({
            bookNumber: this.books.length - 1
        });
    }
    goToPreviousBook() {
        let current = this.state.bookNumber;
        let tempBookNumber =  current === 0 ? this.books.length -1 : current -1;
        this.setState({
            bookNumber: tempBookNumber
        })
    }
    goToNextBook() {
        let tempBookNumber = (this.state.bookNumber + 1) % this.books.length;
        this.setState({
            bookNumber: tempBookNumber
        })
    }
    render() {
        return (
            <div className="container-fluid">
                <TitleBar />
                <BookViewer book={this.books[this.state.bookNumber]} nextBook={()=> this.goToNextBook()} previousBook={()=> this.goToPreviousBook()} />
                <BookCreator addNewBook={this.addNewBook.bind(this)}/>
            </div>
        );
    }
}

export default App;