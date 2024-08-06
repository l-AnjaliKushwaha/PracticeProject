import { useState } from 'react'

function App() {
  let [count, setCount] = useState(0)
  const [name, setName] = useState("Anjali");

  return (
    <>
        <h1>{count}</h1>
        <h1>{name}</h1>
        <button
          onClick={
            () => {
            setName("Anjali Kushwaha")
            setCount(count + 1)
             } }
        >
          Click me
        </button>
    </>
  );
}

export default App
