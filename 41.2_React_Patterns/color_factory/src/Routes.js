import React from "react"
import { Switch, Route, Redirect} from "react-router-dom"
import AllColors from "./AllColors"
import ColorCheck from "./ColorCheck"
import ColorForm from "./ColorForm"

const Routes = () => {
    return (
        
        <Switch>
            <Route exact path="/colors"><AllColors/></Route>
            <Route exact path="/colors/new" ><ColorForm/></Route>
            <Redirect to="/colors"/>
        </Switch>        
    );

}

export default Routes;