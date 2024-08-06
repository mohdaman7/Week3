import React, { useState } from 'react'
import UpdatedComponent from './HOC'
function Person1({money,handleIncrese}) {

  return (
    <div>
      <h1>Jimmy is offering ${money}</h1>
      <button onClick={handleIncrese}>Increase Money</button>
    </div>
  )
}

export default UpdatedComponent(Person1)
