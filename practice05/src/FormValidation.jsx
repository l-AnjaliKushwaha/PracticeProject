import React from 'react'
import { useState } from 'react'

function FormValidation() {
            const [name, setName] = useState("")
            const [email, setEmail] = useState("")
            const [error, setError] = useState("")
            
            const handleSubmit = (e) => {
                        e.preventDefault();
                        if(!name || !email){
                                    setError("Both fields are required")
                        }else{
                                    setError("");
                                    alert(`Name: ${name}, Email: ${email}`)
                        }
            }
  return (
    <div>
            <form onSubmit={handleSubmit}>
                        <input type="text" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
                        <input type="text" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />

                        <button type='submit'>Submit</button>

            </form>
            {error && <p style={{color: 'red'}}>{error}</p>}
      
    </div>
  )
}

export default FormValidation
