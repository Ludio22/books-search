import React from 'react';
import { Link } from 'react-router-dom';

const BookCard = (props) => {
    return(
        <div className="search__book-card">
          <div className="wrapper">
                {(props.img !== null) ?
                <div className="img__wrapper">
                    <Link to={"/" + props.id}>
                        <img src={props.img} alt="book" />
                    </Link>
                </div>
                :
                <Link to={"/" + props.id}>          
                    <img src="https://bitsofco.de/content/images/2018/12/Screenshot-2018-12-16-at-21.06.29.png" alt="book" />
                </Link>
                }
                <h3 className="search__book-name">{props.name}</h3>
                <p className="search__book-categories">{props.categories}</p>
                <p className="search__book-autors">
                    {(props.authors !== undefined) ? 
                    props.authors.map(el => <span>{el}<br /></span>)
                    :
                    null
                    }
                </p>
          </div>
        </div>
    );
}

export default BookCard;