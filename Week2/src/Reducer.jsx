import React, { useReducer } from 'react'
import appReducer from './reducers/appRaducer';

const intialState = {
    value:0,
    color:'white'
  };


function Reducer(){
    const [state,dispatch] = useReducer(appReducer,intialState)
  return (
    <div>
      <div style={{ background:state.color}}>
        <div className="card">
          <button
            onClick={() => {
              dispatch({
                type: 'change-value',
                payload: 1
              })
            }}
          >
            Increment
          </button>

          <label>
            <h1 style={{ color: "black" }}>count is {state.value}</h1>
          </label>

          <button
            onClick={() => {
              dispatch({
                type: 'change-value',
                payload: -1
              })
            }}
          >
            Decrement
          </button>

          <button onClick={()=>{
            dispatch({
              type:'rest',
              payload:0
            })
          }}>Reset</button>
        
        </div>

        <div>

        <button
            onClick={() => {
              dispatch({
                type: 'change-value',
                payload: 5   
              })
            }}
          >
            IncrementBy5
          </button>

          <button
            onClick={() => {
              dispatch({
                type: 'change-value',
                payload: -5
              })
            }}
          >
            decrementBy5
          </button>


        </div>

        <div>
          <button
            onClick={() => {
              dispatch({
                type: 'change-color',
                payload: 'green'
              })
            }}
          >
            Green
          </button>

          <button
            onClick={() => {
              dispatch({
                type: 'change-color',
                payload: 'blue'
              })
            }}
          >
            Blue
          </button>
        </div>
      </div>
    </div>
  )
}

export default Reducer
