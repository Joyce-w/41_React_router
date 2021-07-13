import React, {useState, useEffect, useRef} from "react"
import { Link, useLocation} from "react-router-dom"

const AllColors = props => {
    

    const [color, setColor] = useState([''])

    // const location = useLocation();
    // let newColor = location.state.color;


    //try local storage
    
    // useEffect(() => {
    //     const addNewColor = (formColor) => {
            
    //         console.log(localStorage)
    //         //access location in props to find any color passed from form
    //         setColor(color => [...color, formColor])
    //         console.log
    //         localStorage.setItem('list', color)
    //     }
    //     addNewColor(newColor)
    // },[newColor])


    return (
        <div>
            <h1>Color Factory</h1>
            <Link to="/colors/new">Add a Color </Link>

        </div>

    )
}

export default AllColors;