import React, { useState } from "react"
import { Route, useHistory } from "react-router-dom";

const ColorForm = () => {

    const [formData, setFormData] = useState("#000000");

    //save update color pick after each change
    const handleChange = (e) => {
        const { value } = e.target;
        setFormData(value)
    }

    const history = useHistory();
    //pass color up to parent
    const handleSubmit = (e) => {
        e.preventDefault()
        history.push({
            pathname: '/colors',
            state: {color: formData}
        })
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