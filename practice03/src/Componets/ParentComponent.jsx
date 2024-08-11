import React from 'react'
import ChildComponent from './ChildComponent'

function ParentComponent() {
  return (
    <div>
      <ChildComponent message="Hello from parent"/>
    </div>
  )
}

export default ParentComponent
