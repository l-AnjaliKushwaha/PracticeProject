import React, { useState } from "react";
import SearchBar from "./SearchBar.jsx";
import SelectMenu from "./SelectMenu.jsx";
import CountriesList from "./CountriesList.jsx";
import { useOutletContext } from "react-router-dom";

function Home() {
            const [query, setQuery] = useState("");
            const [isDark] = useOutletContext()
  return (
    <>
      <main className={`${isDark? 'dark' : ''}`}>
        <div className="search-filter-container">
          <SearchBar setQuery={setQuery} />
          <SelectMenu />
        </div>
        <CountriesList query={query} />
      </main>
    </>
  );
}

export default Home
