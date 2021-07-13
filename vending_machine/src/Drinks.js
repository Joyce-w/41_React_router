import React from "react"
import { Link } from "react-router-dom"

const Drinks = () => {
    return (
    <>
        <Link to="/"><button>Go back</button></Link>
        <img className="item" src={'https://i.gifer.com/9lTf.gif'} alt="vitamin"></img>
    </>
 )
}

export default Drinks;