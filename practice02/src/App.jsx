import React from 'react'
import "./App.css";
import Header from './Component/Header.jsx'
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
    <Header/>
    <Outlet/>
    </>
  );
}

export default App

