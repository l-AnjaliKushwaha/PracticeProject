import React, { useState } from 'react'
import Header  from './Component/Header.jsx'
import SearchBar from './Component/SearchBar.jsx'
import SelectMenu from './Component/SelectMenu.jsx'
import CountriesList from './Component/CountriesList.jsx';
import "./App.css";

function App() {
   const [query, setQuery] = useState("");

  return (
    <>
      <Header />
      <main>
        <div className="search-filter-container">
          <SearchBar setQuery={setQuery} />
          <SelectMenu />
        </div>
        <CountriesList query={query}/>
      </main>
    </>
  );
}

export default App

