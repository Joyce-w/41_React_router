import React from "react";
import bgImage from './Jihanki.png';
import "./VendingMachine.css";

import { Link } from "react-router-dom"

const VendingMachine = () => {
    return (
        <div className="VendingMachine">
            <div className="VMtext">
                <img alt="vending machine" src={bgImage}></img>
                <div className="instructions">Hello. I am a vending machine. What would you like to eat?</div>
               
                <div className="snacks">
                    <p><Link to="/drinks">Drinks</Link></p>
                    <p><Link to="/crabs">Crab</Link></p>
                    <p><Link to="/snacks">Snack</Link></p>                    
                </div>

            </div>
        </div>
    )
}

export default VendingMachine; 