import react from "react"
import { Switch, Route, Redirect} from "react-router-dom"
import AllColors from "./AllColors"
import ColorCheck from "./ColorCheck"

const Routes = () => {
    return (
        
        <Switch>
            <h1>this is app route</h1>
            <Route exact path="/colors"><AllColors /></Route>
            <ColorCheck/>
            <Redirect to="/colors"/>
        </Switch>        
    );

}

export default Routes;