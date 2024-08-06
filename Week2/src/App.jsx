import React, { createContext, useReducer, useState } from "react";
import axios from "axios";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import Counter from "./Counter";
import LocalStorage from "./components/LocalStorage";
import Reducer from "./Reducer";
// import Menus from "./components/Menus";
// import FetchData from "./FetchData";
// import Context from "./components/Context";
// import ComponentA from "./components/ComponentA";
import Person1 from "./components/Person1";
import Person2 from "./components/Person2";
import Input from "./components/Input";


const initialValue = {
  count:0,
  color:'green'
}


function reducer(state,action){
  switch(action.type){
    case 'increment':
      return {
        ...state,
        count:state.count+1
      }
    case 'decrement':
      return {
        ...state,
        count:state.count-1
      }
  }
}

function App() {
  // const [color1, setColor1] = useState("red");
  // const [color2, setColor2] = useState("blue");
  const [state,dispatch] = useReducer(reducer,initialValue)
  const isFive = state.count%5==0&&state.count>0; 

  function increment (){
    dispatch({
      type:'increment'
    })
  }

  function decrement (){
    dispatch({
      type:'decrement'
    })
  }

  const [name,setName] = useState('')

  return (
    <>
    <Input/>

      <div style={{background:isFive?'red':'green', width:'200px',height:'100px'}}>

      </div>

      <button onClick={decrement}>-</button>
      <span>  Count: {state.count}  </span>
      <button onClick={increment}>+</button>

     

      

      {/* < Menus/> */}
      {/* < Reducer/> */}
      {/* <FetchData/> */}
      {/* <Context/> */}
      {/* <ComponentA /> */}
      {/* <Counter/> 
      <LocalStorage/>  */}
      {/* <Person1/>
      <Person2/> */}
      
        {/* <div style={{ width: '100px', height: "100px", background: color1 }} 
        onClick={()=>{
          {color1=='red'?setColor1('blue'):setColor1('red')}
          {color2=='blue'?setColor2('red'):setColor2('blue')}
        }}>
        </div>
        <div
          style={{ width: "100px", height: "100px", background: color2 }}
          onClick={()=>{
            {color2=='blue'?setColor2('red'):setColor2('blue')}
            {color1=='red'?setColor1('blue'):setColor1('red')}
          }}
        ></div> */}
      
    </>
  );
}

export default App;
