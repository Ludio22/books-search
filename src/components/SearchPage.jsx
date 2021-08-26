import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearData, getBooks, setBookName, setCategory, setOrder, zeroPages } from '../store/mainSlice';
import BookCard from './books-container/BookCard';
import BooksContainer from './books-container/BooksContainer';
import SearchFrom from './search-form/SearchForm';

const SearchPage = () => {
    const state = useSelector(state => state.data);
    const dispatch = useDispatch();
    let books = null;

    //Добавление введённого названия в state
    const setName = (e) => {
        dispatch(setBookName(e.target.value));
    }

    //Активация запроса по нажатию на Enter
    const setOnKeyName = (e) => {
        const params = {subject: state.category, name: state.bookName, index: 0, order: state.order};
        if (e.charCode === 13) {
            dispatch(clearData());
            dispatch(zeroPages());
            if(params.name !== ""){
                dispatch(getBooks(params));
            }
        }
    }

    //Активация запроса по нажатию на input
    const setBooks = () => {
        const params = {subject: state.category, name: state.bookName, index: 0, order: state.order};
        dispatch(clearData());
        dispatch(zeroPages());
        if(params.name !== ""){
            dispatch(getBooks(params));
        }
    }

    //Подгрузка книг
    const loadMore = () => {
        const params = {subject: state.category, name: state.bookName, index: state.curPage, order: state.order};
        if(params.name !== ""){
            dispatch(getBooks(params));
        }
    }

    const chengeOrder = (e) => {
        dispatch(setOrder(e.target.value));
        dispatch(clearData());
        dispatch(zeroPages());
        const params = {subject: state.category, name: state.bookName, index: 0, order: e.target.value};
        if(params.name !== ""){
            dispatch(getBooks(params));
        }
    }

    const chengeCategory = (e) => {
        dispatch(setCategory(e.target.value));
        dispatch(clearData());
        dispatch(zeroPages());
        const params = {subject: e.target.value, name: state.bookName, index: 0, order: state.order};
        if(params.name !== ""){
            dispatch(getBooks(params));
        }
    }

    if (state.data.length !== 0) {
        books = state.data.map(el => <BookCard 
            key={el.index} 
            img={(el.volumeInfo.imageLinks !== undefined) ? el.volumeInfo.imageLinks.smallThumbnail : "https://bitsofco.de/content/images/2018/12/Screenshot-2018-12-16-at-21.06.29.png"}
            name={el.volumeInfo.title}
            categories={el.volumeInfo.categories}
            data={el.volumeInfo.publishedDate}
            authors={el.volumeInfo.authors} />);
    }

    return(
        <section className="search">
            <div className="container">
                <SearchFrom 
                    category={state.category}
                    order={state.order}
                    orderOptions={state.orderOptions}
                    categoryOptions={state.categoryOptions}
                    chengeOrder={chengeOrder}
                    chengeCategory={chengeCategory}

                    bookName={state.bookName} 
                    setBooks={setBooks} 
                    setOnKeyName={setOnKeyName} 
                    setName={setName} />
                <BooksContainer 
                    totalBook={state.totalBook} 
                    isEmpty={state.data.length === 0} 
                    loadMore={loadMore} 
                    books={books} 
                    isLoad={state.loading} />
            </div>
        </section>
    );
}

export default SearchPage;