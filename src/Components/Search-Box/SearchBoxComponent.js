import React from 'react';
import './css/Search-box.css';

export default function SearchBox(props) {
  return (
    <input
      type="search"
      className={`search-box ${props.className}`}
      placeholder={props.placeHolder}
      onChange={props.onChangeHandler}
    />
  );
}
