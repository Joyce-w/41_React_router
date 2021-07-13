import React, { useState } from "react"
import { useHistory } from "react-router-dom";
import "./ColorForm.css"

const ColorForm = ({handleNewColor}) => {
    
    //state to store changes from color picker
    const [formData, setFormData] = useState("#000000");    

    //save update color pick after each change
    const handleChange = (e) => {
        const { value } = e.target;
        setFormData(value)
    }

    const history = useHistory();
    //pass color up to parent
    const handleSubmit = (e) => {
        e.preventDefault();
        //pass form data up to Routes component
        handleNewColor(formData);
        //redirect to /colors
        history.push("/colors")

    }

    return (
        <form onSubmit={handleSubmit}>
            <h1 className="ColorForm-h1">Add Color!</h1>
            <label htmlFor="color">Color </label>
            <input
                type="color"
                placeholder="red, green, blue.."
                name="color"
                value={formData}
                onChange={ handleChange}>
            </input>
            <button>Add Color</button>
        </form>
    )
}

export default ColorForm;