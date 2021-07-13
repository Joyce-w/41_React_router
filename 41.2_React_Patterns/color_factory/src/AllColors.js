import React, {useState, useEffect, useRef} from "react"
import { Link, useLocation} from "react-router-dom"

const AllColors = props => {
    

    const [color, setColor] = useState(['#bf4545'])
    

    //use useLocation() to retrieve the color that was passed through the form 
    const location = useLocation();
    let newColor = location.state.color;


    //update setColor with the newColor, store in local storage 
    useEffect(() => {
        const addColor = (newColorFromForm) => {

            let list = JSON.parse(localStorage.getItem('colorList'))
            console.log(list)
            console.log(color)
            //update color state with list from local storage 
            setColor((list) => [...list, newColorFromForm])

            localStorage.setItem('colorList', JSON.stringify(color));

        }
        addColor(newColor);

    },[newColor])


    return (
        <div>
            <h1>Color Factory</h1>
            <Link to="/colors/new">Add a Color </Link>

        </div>

    )
}

export default AllColors;