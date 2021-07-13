import React from "react"
import { Link } from "react-router-dom"

const DogDetail = ({ dog }) => {

    let img = dog ? <img alt={dog.name} src={dog.src}></img> : null

    return (
        <>
            <h1>{dog.name}</h1>
            {img}
            <div>
                <ul>
                    <h4>Age: {dog.age}</h4>
                    <ul>
                        <h4>Facts:</h4>
                        {dog.facts.map(fact => {
                            return <li>{fact}</li>
                        })}
                    </ul>

                </ul>
            </div>
        <Link to="/dogs>"><button>Go back to homepage</button></Link>
        </>
    )
}

export default DogDetail;