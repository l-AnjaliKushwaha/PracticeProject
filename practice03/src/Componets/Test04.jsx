import React from 'react'

function Test04() {
            const items = ['Apple', 'Banana', 'Cherry']
  return (
    <div>
      {items.map((item, index) => {
            return <h1 key={index}>{item}</h1>

      })}
    </div>
  )
}

export default Test04
