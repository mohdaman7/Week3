import React, { useRef } from 'react'

function LocalStorage() {
    const data=useRef();
    const handleClick=()=>{
        console.log(data.current.value,"initial Value")
        localStorage.setItem('inputValue',data.current.value)
    }
    console.log(localStorage.getItem('inputValue'),'***')
  return (
    <div>
      <input ref={data}/>
       <button onClick={handleClick}>Add</button>
    </div>
  )
}

export default LocalStorage
