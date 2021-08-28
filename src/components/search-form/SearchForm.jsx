import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { clearData, getBooks, setBookName, setCategory, setOrder, zeroPages } from '../../store/mainSlice';
import Sorting from './Sorting';

const SearchFrom = () => {
  const state = useSelector(state => state.data);
  const dispatch = useDispatch();
  let history = useHistory();
  
  //Добавление введённого названия в state
  const setName = (e) => {
    dispatch(setBookName(e.target.value));
  }

  //Активация запроса по нажатию на Enter
  const setOnKeyName = (e) => {
    const params = {subject: state.category, name: state.bookName, index: 0, order: state.order};
    if (e.charCode === 13) {
        history.push("/");
        dispatch(clearData());
        dispatch(zeroPages());
        if(params.name !== ""){
          dispatch(getBooks(params));
        }
    }
  }

  //Активация запроса по нажатию на input
  const setBooks = () => {
    history.push("/");
    const params = {subject: state.category, name: state.bookName, index: 0, order: state.order};
    dispatch(clearData());
    dispatch(zeroPages());
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
  return(
    <div className="search__form">
      <div className="mask"></div>
      <div className="container">
        <div className="search__input-container">
          <input 
            className="search__input" 
            type="text" 
            placeholder="Enter book title" 
            onChange={setName} 
            value={state.bookName} 
            onKeyPress={setOnKeyName} />
          <input type="button" value="Go!" onClick={setBooks} />
        </div>
        <div className="search__select-container">
          <Sorting options={state.orderOptions} checked={state.order} chenge={chengeOrder} />
          <Sorting options={state.categoryOptions} checked={state.category} chenge={chengeCategory} />
        </div>
      </div>
    </div>
  );
}

export default SearchFrom;