import React from 'react'

function Header() {
  return (
    <header className="header-container">
      <div className="header-content">
        <h1 className="title">
          <a href="/">Where in the world?</a>
        </h1>
        <p className="theme-changer">
          <i className="fa-regular fa-moon">&nbsp; &nbsp; Dark Mode</i>
        </p>
      </div>
    </header>
  );
}

export default Header
