import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom"

import Dog from "./Dog"

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Switch>
        <Route exact path="/dogs"><Dog /></Route>
        <Route exact path="/dogs/:name"><Dog /></Route>          
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
