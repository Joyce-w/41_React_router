import React, {useState, useEffect} from "react"
import { Switch, Route, Redirect } from "react-router-dom"
import AllColors from "./AllColors"
import ColorCheck from "./ColorCheck"
import ColorForm from "./ColorForm"
import useHandleColor from "./useHandleColors";

const Routes = () => {
    
    //get local storage values or initalize []
    const initialColorsArray = JSON.parse(localStorage.getItem('colorList')) || [];
    const [color, setColor] = useState(initialColorsArray)

    const handleNewColor = (newColor) => {
        setColor((color)=>[...color, newColor])
    }
    
    useEffect(() => {
        localStorage.setItem('colorList', JSON.stringify(color));
    }, [color])
 

    return (
        
        <Switch>
            <Route exact path="/colors"><AllColors colors={color}/></Route>
            <Route exact path="/colors/new"><ColorForm handleNewColor={handleNewColor}/></Route>
            <Redirect to="/colors"/>
        </Switch>        
    );

}



export default Routes;