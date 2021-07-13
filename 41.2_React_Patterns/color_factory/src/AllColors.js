import React, {useState, useEffect, useRef} from "react"
import { Link, useLocation} from "react-router-dom"
import ColorForm from "./ColorForm"
import useHandleColor from "./useHandleColors";


const AllColors = () => {
    
    const [color, addColor] = useHandleColor()
    console.log(color)
    // console.log(color)
    // //get any colors in local storage or use an empty array if none
    // let initialColors = JSON.parse(localStorage.getItem('colorList')) || [];
    // const [color, setColor] = useState(initialColors)
    

    //use useLocation() to retrieve the color that was passed through the form 
    // const location = useLocation();
    // let newColor = location.state.color;


    // //update setColor with the newColor
    // useEffect(() => {
    //     const addColor = (newColorFromForm) => {

    //         setColor((list) => [...list, newColorFromForm])

    //         localStorage.setItem('colorList', JSON.stringify(color));

    //     }
    //     addColor(newColor);

    // }, [newColor])
    
    // // update localstorage to be the new state
    // useEffect()


    return (
        <div>
            <h1>Color Factory</h1>
            <Link to="/colors/new">Add a Color </Link>
            
        </div>

    )
}

export default AllColors;