import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCurBook } from '../store/mainSlice';

const BookPage = () => {
    const state = useSelector(state => state.data);
    const data = state.curBook;
    const error = state.error;
    const dispatch = useDispatch();
    const { bookId } = useParams();
    let img;

    useEffect(() => {
        if (data === null) {
            dispatch(getCurBook(bookId));
        }
    }, [dispatch, data, bookId]);

    if (data !== null) {
        if (data.volumeInfo.imageLinks.extraLarge !== undefined) {
            img = data.volumeInfo.imageLinks.extraLarge;
        } else if (data.volumeInfo.imageLinks.large !== undefined) {
            img = data.volumeInfo.imageLinks.large;
        } else if (data.volumeInfo.imageLinks.medium !== undefined) {
            img = data.volumeInfo.imageLinks.medium;
        } else if (data.volumeInfo.imageLinks.small !== undefined) {
            img = data.volumeInfo.imageLinks.small;
        } else if (data.volumeInfo.imageLinks.smallThumbnail !== undefined) {
            img = data.volumeInfo.imageLinks.smallThumbnail;
        } else if (data.volumeInfo.imageLinks.thumbnail !== undefined) {
            img = data.volumeInfo.imageLinks.thumbnail;
        }
    }

    return(
        <section className="book">
            {error !== null ?
                <div className="error">Error: {error}</div> 
                    :
                <div className="container">
                <div className="book__cover">
                    <img src={img} alt="book" />
                </div>
                {data !== null &&
                <div className="book__info" >
                    <div className="wrapper" >
                        <h2>{data.volumeInfo.title}</h2>
                        <p className="search__book-autors">
                        {(data.volumeInfo.authors !== undefined) ? 
                        data.volumeInfo.authors.map(el => <span>{el}<br /></span>)
                        :
                        null
                        }
                        </p>
                        <p>{data.volumeInfo.categories}</p>
                        <div dangerouslySetInnerHTML={{__html: data.volumeInfo.description}}></div>
                    </div>
                </div>
                }
            </div>
            }
        </section>
    );
}

export default BookPage;