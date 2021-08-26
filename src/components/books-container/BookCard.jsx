import React from 'react';

const BookCard = (props) => {
    return(
        <div className="search__book-card">
          <div className="wrapper">
              <img src={props.img} alt="book" />
              <div className="search__book-info">
                    <p className="search__book-name">{props.name}</p>
                    <p className="search__book-categories">{props.categories}</p>
                    <p className="search__book-autors">{(props.authors !== undefined) ? 
                        props.authors.map(el => <span key={el.index}>{el}</span>)
                        :
                        null
                        }</p>
              </div>
          </div>
        </div>
    );
}

export default BookCard;