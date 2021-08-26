import React from 'react';

const Sorting = (props) => {
    return(
        <select className="search__select" value={props.checked} onChange={props.chenge}>
            {props.options.map(el => <option value={el}>{el}</option>)}
        </select>
    );
}

export default Sorting;