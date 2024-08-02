import React, { useContext } from 'react'
import { userContext } from './Context'


function Components2() {
    const {counter,setCounter} =  useContext(userContext)
  return (
    <div>
      <button onClick={()=> setCounter((counter)=>counter+1)}
      >Click Counter : {counter}</button>
    </div>
  )
}

export default Components2
