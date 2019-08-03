import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, HashRouter } from "react-router-dom";
import App from "./components/app";
import "./styles/globals.scss";

ReactDOM.render(
    <HashRouter>
      <App />
    </HashRouter>,
document.getElementById("root"));
