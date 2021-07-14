import React, {useState, useEffect} from "react"
import { Switch, Route, Redirect} from "react-router-dom"
import AllColors from "./AllColors"
import ColorForm from "./ColorForm"
import Color from "./Color"

const Routes = () => {
    
    //get local storage values or initalize []
    const initialColorsArray = JSON.parse(localStorage.getItem('colorList')) || [];
    const [color, setColor] = useState(initialColorsArray)

    const handleNewColor = (newColor) => {
        setColor((color)=>[...color, newColor])
    }
    console.log(color)
    
    useEffect(() => {
        localStorage.setItem('colorList', JSON.stringify(color));
    }, [color])

    function renderCurrentColor(props) {
        const { param } = props.match.params;
        const hex = color[param];
        
        return <Color color={hex}></Color>
    }

    return (
        
        <Switch>
            <Route exact path="/colors"><AllColors colors={color} /></Route>.
            <Route exact path="/colors/new"><ColorForm handleNewColor={handleNewColor}/></Route>
            <Route exact path="/colors/:color" render={ renderCurrentColor }></Route>
            <Redirect to="/colors"/>
        </Switch>        
    );

}



export default Routes;

