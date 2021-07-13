import React, { useEffect, useState} from "react"

//import useParams to look for object
import { Link } from "react-router-dom"


const Dog = ({dogs}) => {
    
    let img = dogs.map(dog => {
        return <Link to={`/dogs/${(dog.name).toLowerCase()}`}> <img alt={dog.name} src={dog.src}></img></Link>
    })
    
    return (
        <>
            <h1>Henlo</h1>
            <nav>
            {img}                
            </nav>
        </>
    )
}

export default Dog;