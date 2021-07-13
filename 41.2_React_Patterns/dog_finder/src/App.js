import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom"

import Dog from "./Dog"
import FilterDog from './FilterDog';
import duke from "./duke.jpg"
import tubby from "./tubby.jpg"
import perry from "./perry.jpg"
import whiskey from "./whiskey.jpg"

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        {/* Match routes exclusively */}
        <Switch>
          <Route exact path="/dogs"><Dog dogs={App.defaultProps.dogs} /></Route>
          {/* Redirect any param to FilterDog component */}
          <Route exact path="/dogs/:name"><FilterDog dogs={App.defaultProps.dogs} /></Route>
          <Redirect to="/dogs" />
        </Switch>
      </BrowserRouter>

    </div>
  );
}


//sets defaultProps for the class
App.defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      src: whiskey,
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Duke",
      age: 3,
      src: duke,
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs."
      ]
    },
    {
      name: "Perry",
      age: 4,
      src: perry,
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain."
      ]
    },
    {
      name: "Tubby",
      age: 4,
      src: tubby,
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore."
      ]
    }
  ]
}

export default App;
