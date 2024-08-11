import { useState } from 'react'
import './App.css'

function App({isLoggedIn = true}) {
  const [count, setCount] = useState(0)
  

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count+1)}>Increment</button>
      {
        isLoggedIn ? <h2>Hello, User!</h2> : <h2>Please Login</h2>
      }
    </>
  )
}

export default App
