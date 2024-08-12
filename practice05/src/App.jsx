import React from 'react'
import { useState } from 'react'
import FormValidation from './FormValidation'
import ToggleVisibility from './ToggleVisibility'

function App() {
  const [count, setCount] = useState(0)
  const maxCount = 10

  const increment = () => {
    if(count < maxCount){
      setCount(count+1)
    }
  }
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment} disabled={count >= maxCount}>
        {count >= maxCount ? 'Max Reached' : 'Increment'}
      </button>

      <FormValidation/>
      <ToggleVisibility/>
      
    </div>
  )
}

export default App
