import React, { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
// import CountriesData from "../CountriesData.jsx";

export default function CountriesList({query}) {
  const [countriesData, setCounteriesData] = useState([])
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all').then((res) => res.json()).then((data) => {
      setCounteriesData(data)
    })
  }, [])

    // useEffect(() => {
    //   console.log("hiii");
    // }, [count]);

  
  return (
    <>
    {/* <h1>{count}</h1> */}
    {/* <button onClick={() => setCount(count + 1)}>Incrememt</button> */}
      <div className="countries-container">
        {countriesData
          .filter((country) =>
            country.name.common.toLowerCase().includes(query)
          )
          .map((country) => {
            return (
              <CountryCard
                key={country.name.common}
                name={country.name.common}
                flag={country.flags.svg}
                population={country.population}
                region={country.region}
                capital={country.capital?.[0]}
              />
            );
          })}
      </div>
    </>
  );
}
