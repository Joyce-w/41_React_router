import React, { useState } from "react"
import { Redirect, Route, useHistory } from "react-router-dom";
import AllColors from "./AllColors";
import useHandleColor from "./useHandleColors";

const ColorForm = () => {
    
    //setup hook to handle color change
    const [color, addColor] = useHandleColor()
    console.log(color)
    const [formData, setFormData] = useState("#000000");
    console.log(formData)

    //save update color pick after each change
    const handleChange = (e) => {
        const { value } = e.target;
        setFormData(value)
    }

    const history = useHistory();
    //pass color up to parent
    const handleSubmit = (e) => {
        e.preventDefault();
        addColor(formData);
        history.push("/colors")

    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Add Color!</h1>
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