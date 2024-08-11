import React from 'react'
import Test01 from './Componets/Test01.jsx'
import './App.css'
import Test02 from './Componets/Test02.jsx'
import Test03 from './Componets/Test03.jsx'
import Test04 from './Componets/Test04.jsx'
import ParentComponent from './Componets/ParentComponent.jsx'

function App() {
  return (
    <div>
      <Test01/>
      <Test02/>
      {/* <Test03/> */}
      <Test04/>
      <ParentComponent/>
    </div>
  )
}

export default App

