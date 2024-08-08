import React from 'react'
import { useAsyncError } from 'react-router-dom'

function Error() {
  const error = useAsyncError();
  console.log(error);

  return (
    <div>
      <h1>Something wents wrong.</h1>
    </div>
  )
}

export default Error
