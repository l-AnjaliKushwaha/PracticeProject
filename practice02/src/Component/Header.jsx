import React from 'react'

function Header({theme}) {
  const[isDark, setIsDark] = theme

//   if(isDark){
// document.body.classList.add("dark");
//   }
//   else{
//     document.body.classList.remove("dark");
//   }
  return (
    <header className={`header-container ${isDark? 'dark': ''}`}>
      <div className="header-content">
        <h1 className="title">
          <a href="/">Where in the world?</a>
        </h1>
        <p
          className="theme-changer"
          onClick={() => {
            setIsDark(!isDark);
            localStorage.setItem("isDarkMode", !isDark);
          }}
        >
          <i className={`fa-solid fa-${isDark ? "sun" : "moon"}`}>
            &nbsp; &nbsp; {isDark ? "Light" : "Dark"} Mode
          </i>
        </p>
      </div>
    </header>
  );
}

export default Header
