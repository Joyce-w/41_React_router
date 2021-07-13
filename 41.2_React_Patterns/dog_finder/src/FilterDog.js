import React from 'react';
import { useParams } from 'react-router-dom';
import DogDetail from "./DogDetail"
import { Redirect } from "react-router-dom"

const FilterDog = ({ dogs }) => {
    //save the name of the param
    const { name } = useParams();
    //filter dog array for matching dog name
    let currentDog = dogs.filter(dog => {
        return dog.name.toLowerCase() === name.toLowerCase()
    })
    currentDog = currentDog[0]

    //if there is param name and a matching than render DogDetail component
    if (name &&currentDog) {
        return <DogDetail dog={currentDog} />;            
    } else {
        //redirect to /dogs if no match
        return <Redirect to="/dogs"/>;      
    }

}

export default FilterDog;