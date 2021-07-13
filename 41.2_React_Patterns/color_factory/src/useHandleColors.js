import React, { useState, useEffect } from "react"
import { Redirect } from "react-router-dom"


const useHandleColor = () => {
  //use callback to find localstorage 
  
  const [color, setColor] = useState(() => {
    let value
        value = JSON.parse(
        //look in the windows localStorage to find a value, if no key then set it as default value
        localStorage.getItem('colorList')) || [];

    return value;
  })

  //update state to have new color
   const addColor = (newColorFromForm) => {
      setColor((list) => [...list, newColorFromForm])
      localStorage.setItem('colorList', JSON.stringify(color));
      
  }
  console.log(color)

    // //whenever color changes, update localstorage*/
  useEffect(() => {
      localStorage.setItem('colorList', JSON.stringify(color));
      <Redirect to="/colors"/>
    }, [color])
    
  return [color, addColor];
}
export default useHandleColor;
