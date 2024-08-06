import React, { useState } from 'react'

const Input = () => {
  const [value,setValue]=useState("")
  const [tasks,setTasks]=useState([])

  const clickhandler=()=>{
    setTasks([...tasks,value])
    setValue("")
  }
  function handleClick(e){
    setValue(e.target.value)
  }
  return (
    <div>
      <input type="text"
      onChange={handleClick}
      value={value}
      />
      <button onClick={clickhandler} type='submit'>add</button>

      {tasks.map((task,index)=>(
        <div>
          {task}
         
        </div>
      ))}
      
    </div>
  )
}

export default Input