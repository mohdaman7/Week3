import React, { useState } from 'react'
import UpdatedComponent from './HOC'

function Person2({money,handleIncrese}) {

  return (
    <div>
      <h1>John is offering ${money}</h1>
      <button onClick={handleIncrese}>Increase Money</button>
    </div>
  )
}

export default UpdatedComponent(Person2)
