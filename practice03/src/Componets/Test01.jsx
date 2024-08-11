import { useState } from "react";

function Test01({ isLoggedIn = true }) {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      {isLoggedIn ? <h2>Hello, User!</h2> : <h2>Please Login</h2>}
    </div>
  );
}

export default Test01;
