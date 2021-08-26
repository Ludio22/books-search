import React from 'react';
import Sorting from './Sorting';

const SearchFrom = (props) => {
    return(
        <div className="search__form">
          <div className="search__input-container">
            <input 
              className="search__input" 
              type="text" 
              placeholder="Enter book title" 
              onChange={props.setName} 
              value={props.bookName} 
              onKeyPress={props.setOnKeyName} />
            <input type="button" value="Go!" onClick={props.setBooks} />
          </div>
          <div className="search__select-container">
            <Sorting options={props.orderOptions} checked={props.order} chenge={props.chengeOrder} />
            <Sorting options={props.categoryOptions} checked={props.category} chenge={props.chengeCategory} />
          </div>
        </div>
    );
}

export default SearchFrom;