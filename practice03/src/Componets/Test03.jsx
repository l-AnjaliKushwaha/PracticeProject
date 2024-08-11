import React, { useEffect, useState } from "react";

function Test03() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div>
      <p>
        {data.map((country) => {
          return <div key={country.name.common}>{country.name.common}</div>;
        })}
      </p>
    </div>
  );
}

export default Test03;
