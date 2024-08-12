import React from 'react'
import { useState } from 'react'

function ToggleVisibility() {
            const [visible, setVisible] = useState(false)
  return (
    <div>
      <button onClick={() => setVisible(!visible)}>
            {visible ? "Hide" : "Show"} Text
      </button>
      {visible && <p>This is the text to show or hide</p>}
    </div>
  )
}

export default ToggleVisibility
