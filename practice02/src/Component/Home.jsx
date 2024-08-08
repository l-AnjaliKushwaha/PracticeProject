import React, { useState } from "react";
import SearchBar from "./SearchBar.jsx";
import SelectMenu from "./SelectMenu.jsx";
import CountriesList from "./CountriesList.jsx";

function Home() {
            const [query, setQuery] = useState("");
  return (
    <>
      <main>
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
