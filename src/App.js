import React, { useEffect, useState } from 'react';
import CardList from './Components/Cardlist/CardListComponent';
import Header from './Components/header/Header';
import SearchBox from './Components/Search-Box/SearchBoxComponent';

export default function App() {
     //useState Hook for the search field
     const [monsters, setMonsters] = useState([]);
     const [searchField, setSearchField] = useState('');
     const [filteredMonsters, setFilteredMonsters] = useState(monsters);

     //useEffect is a side effect(meaning it relies on objects of outside its scope), this hook takes in a callback function(what we want to happen in the code)
     // the second parameter in useEffect takes in dependecies, e.g prop values or state values
     //the callBack function only runs when the depency changes whilst rendering
     useEffect(() => {
          //this console log is just to see how many times useEffect is rendered
          console.log('useEffect');
          //first we fetch data from remote place using 'fetch
          fetch('https://jsonplaceholder.typicode.com/users')
               //then we take the response from the site and turn it into json
               .then(response => response.json())
               // then we take the first ".then" and pass "users" and callback "setMonsters" to return users inside our state "monsters" array
               .then(users => setMonsters(users));
     }, []);

     //another useEffect for filtered monsters
     useEffect(() => {
          //the first parameter takes in a function for searching our monsters, first creat the arrow function thenn follow up with a filter and return the parameter in lower case and make sure it includes the search field
          const newFilteredMonsters = monsters.filter(monstersNames => {
               return monstersNames.name
                    .toLocaleLowerCase()
                    .includes(searchField);
          });
          setFilteredMonsters(newFilteredMonsters);
     }, [monsters, searchField]);

     const onSearchChange = event => {
          const searchFieldString = event.target.value.toLocaleLowerCase();
          setSearchField(searchFieldString);
     };

     return (
          <div className="App">
               <Header className="header" />
               <SearchBox
                    onChangeHandler={onSearchChange}
                    placeHolder="Search the monsters"
                    className="monsters-searchbox"
               />
               <CardList monsters={filteredMonsters} />
          </div>
     );
}
