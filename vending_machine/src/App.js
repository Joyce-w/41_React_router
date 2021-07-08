import './App.css';
import VendingMachine from './VendingMachine'
import Snacks from "./Snacks"
import Drinks from "./Drinks"
import MoneyCrab from "./MoneyCrab"

import { BrowserRouter, Route, Switch } from "react-router-dom"


function App() {
  return (
    <div className="App">
  <BrowserRouter>
      <Switch>
          <Route exact path="/">
              <VendingMachine/>
          </Route>           
          <Route exact path="/crabs">
              <MoneyCrab/>
          </Route>           
          <Route exact path="/drinks">
              <Drinks/>
          </Route>
          <Route exact path="/snacks">
              <Snacks/>
          </Route>                                 
      </Switch>

  </BrowserRouter>
    </div>
  );
}

export default App;
