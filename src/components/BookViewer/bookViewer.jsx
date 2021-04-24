import React from 'react';

function BookViewer(props) {
    return(
        <div className="row row-spacer">
            <div className="col">
                <button onClick={() => props.previousBook()}>Previous Book</button>
            </div>
            <div className="col">
                <h1>{props.book.title}</h1>
                <h4>{props.book.author}</h4>
            </div>
            <div className="col">
                <button onClick={() => props.nextBook()}>Next Book</button>
            </div>
        </div>
    )
}

export default BookViewer;