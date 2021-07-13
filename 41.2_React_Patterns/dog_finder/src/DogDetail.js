import React from "react"


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
        </>
    )
}

export default DogDetail;