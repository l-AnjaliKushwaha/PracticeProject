import React, { useState } from 'react'

function Test02() {
            const [inputValue, setInputValue] = useState("")
            const [submittedValue, setSubmittedValue] = useState("")

            const handleSubmit = (e) => {
                        e.preventDefault()
                        setSubmittedValue(inputValue);

            }
          
  return (
    <div>
            <form onSubmit={handleSubmit}>
                        <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                        <button type='submit'>Submit</button>
            </form>
            {submittedValue && <p>You submitted: {submittedValue}</p>}
     
    </div>
  )
}

export default Test02
