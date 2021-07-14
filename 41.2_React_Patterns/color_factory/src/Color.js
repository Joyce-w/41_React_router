import React from "react"
import { useParams, Link } from 'react-router-dom';
import "./Color.css"

const Color = () => {
    const { color } = useParams();

    let colorHex= `#${color}`
    
    return (
        <div className="Route" style={{backgroundColor: colorHex}}>
            <p className="Route-p">Do you like this color?</p>
            <Link to="/colors"><button className="Route-btn">Back to color list</button></Link>
        </div>
    )
}

export default Color;

