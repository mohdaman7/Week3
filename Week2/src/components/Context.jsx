import React, { createContext, useState } from 'react'
import Components2 from './Components2';

export const userContext = createContext();

function Context() {
    const [counter,setCounter] =  useState(0)
  return (
    <div>
      <userContext.Provider value={{counter,setCounter}}>
           <Componen ts2/>
      </userContext.Provider>
    </div>
  )
}

export default Context
