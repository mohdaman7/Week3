import React, { useEffect, useState } from 'react'
import axios, { Axios } from 'axios'

function FetchData(){
    const [data,setData] = useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => setData(res.data))
        .catch(err => console.log(err))
    },[])

  return (
    <div >
     
    </div>
  )
}

export default FetchData
