import React, { useEffect, useState } from 'react'

function Menus(){

  let [menu,setMenu] = useState([])

  async function getAllTheMenus(){
    const API_URL = "https://www.themealdb.com/api/json/v1/1/search.php?f=a"
    let response = await fetch(API_URL)
    let data = await response.json() 
    setMenu(data.meals)
  }
  useEffect(()=>{
    getAllTheMenus()
  },[])

  console.log("The meles is ",menu)
  let menuImages = menu.map((item)=>{
    return (
      <img src={item.strMealThumb}/>
    )
  })

  
  return (
    <div>
      {menuImages}
    </div>
  );
}
 

export default Menus
