import React, { useContext, useState } from "react";
import SearchBar from "./SearchBar.jsx";
import SelectMenu from "./SelectMenu.jsx";
import CountriesList from "./CountriesList.jsx";
import ThemeContext from "../Contexts/ThemeContext.jsx";

function Home() {
            const [query, setQuery] = useState("");
            const [isDark] = useContext(ThemeContext);
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
