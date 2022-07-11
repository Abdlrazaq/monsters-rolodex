import React, { useState, useEffect } from "react";

import CardList from "./components/card-list/card-list/card-list.component";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {

    setFilteredMonsters(
      monsters.filter((monster) => {
        return monster.name.toLocaleLowerCase().includes(search.toLocaleLowerCase());
      })
  
    )

  }, [monsters, search]);


  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>

        <input 
        type="search" 
        className='search-box'
        placeholder="Search Monsters"
        onChange={e => setSearch(e.target.value)}
        />

      <CardList monsters={filteredMonsters} />
    </div>
  );
}

export default App;
