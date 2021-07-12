import React, { useEffect, useState} from "react"
import duke from "./duke.jpg"
import tubby from "./tubby.jpg"
import perry from "./perry.jpg"
import whiskey from "./whiskey.jpg"

//import useParams to look for object
import { useParams } from "react-router-dom"


const Dog = () => {

    const {name} = useParams();
    const [dogName, setDogName] = useState(name)

    useEffect(() => {

        //updates the state
        setDogName(name);

    }, [name]) //updates based on param value
    
    const allDogs =
        [perry, whiskey, duke, tubby]

    let img =
        dogName ?
            <img alt={dogName} src={dogName}></img> :
            allDogs.map(el => {
                return <img alt={el} src={el}></img>
            });
    return (
        <>
            {img}
        </>
    )
}

export default Dog;