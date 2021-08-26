import React from 'react';
import Preloader from '../Preloader';

const BooksContainer = (props) => {
    return(
        <div className="search__results">
            {!props.isEmpty && <h2 className="search__total">Найдено книг: {props.totalBook}</h2> }
            <div className="search__books">
                {props.books}
            </div>
            {props.isLoad && <Preloader />}
            {!props.isEmpty && <input type="button" onClick={props.loadMore} value="Load more"/>}
        </div>
    );
}

export default BooksContainer;