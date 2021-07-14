import React from "react"
import { useParams, Link } from 'react-router-dom';
import "./Color.css"

const Color = () => {
    const { color } = useParams();

    let colorHex= `#${color}`
    
    return (
        <div className="Route" style={{backgroundColor: colorHex}}>
            <p className="Route-p">Nice Color!</p>
            <Link to="/colors"><button className="Route-btn">Back to color list</button></Link>
        </div>
    )
}

export default Color;

