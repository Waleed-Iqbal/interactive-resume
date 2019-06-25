import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Portfolio from "./components/portfolio";
import "./styles/globals.scss"
import "./styles/variables.scss"

ReactDOM.render(
    <Router>
      <Portfolio />
    </Router>, 
document.getElementById("root"));
