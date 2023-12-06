import React from 'react';
import './css/Search-box.css';

export default function SearchBox(props) {
     const { className, placeHolder, onChangeHandler } = props;
     return (
          <input
               type="search"
               className={`search-box ${className}`}
               placeholder={placeHolder}
               onChange={onChangeHandler}
          />
     );
}
