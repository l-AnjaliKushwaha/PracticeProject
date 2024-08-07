import React from 'react'
import Header  from './Component/Header.jsx'
import SearchBar from './Component/SearchBar.jsx'
import SelectMenu from './Component/SelectMenu.jsx'
import CountriesList from './Component/CountriesList.jsx';
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <div className="search-filter-container">
          <SearchBar />
          <SelectMenu />
        </div>
        <CountriesList/>
      </main>
    </>
  );
}

export default App

