import React, { useState } from 'react'
import "./App.css";
import Header from './Component/Header.jsx'
import { Outlet } from 'react-router-dom';
import ThemeContext from './Contexts/ThemeContext.jsx';

function App() {
  const [isDark, setIsDark] = useState(
    JSON.parse(localStorage.getItem("isDarkMode")) 
  );
  return (
    <ThemeContext.Provider value={[[isDark, setIsDark]]}>
      <Header theme={[isDark, setIsDark]} />
      <Outlet context={[isDark, setIsDark]} />
    </ThemeContext.Provider>
  );
}

export default App

