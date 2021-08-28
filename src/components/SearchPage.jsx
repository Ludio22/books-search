import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBooks } from '../store/mainSlice';
import BookCard from './books-container/BookCard';
import BooksContainer from './books-container/BooksContainer';
import Zoom from 'react-reveal/Zoom';

const SearchPage = () => {
    const state = useSelector(state => state.data);
    const dispatch = useDispatch();
    let books = null;

    //Подгрузка книг
    const loadMore = () => {
        const params = {subject: state.category, name: state.bookName, index: state.curPage, order: state.order};
        if(params.name !== ""){
            dispatch(getBooks(params));
        }
    }

    if (state.data.length !== 0) {
        books = state.data.map(el => 
        <Zoom>
            <div>
            <BookCard 
                key={el.id}
                id={el.id} 
                img={(el.volumeInfo.imageLinks !== undefined) ? el.volumeInfo.imageLinks.smallThumbnail : null}
                name={el.volumeInfo.title}
                categories={el.volumeInfo.categories}
                authors={el.volumeInfo.authors} />
            </div>
        </Zoom>);
    }

    return(
        <section className="search">
            <div className="container">
                <BooksContainer 
                    totalBook={state.totalBook} 
                    isEmpty={state.data.length === 0} 
                    loadMore={loadMore} 
                    books={books} 
                    isLoad={state.loading}
                    isError={state.error !== null} 
                    error={state.error} />
            </div>
        </section>
    );
}

export default SearchPage;