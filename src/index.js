import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import App from "./components/app";
import "./styles/home.scss";

ReactDOM.render(
  <HashRouter>
    <div className="app-container">
      <App />
    </div>
  </HashRouter>,
  document.getElementById("root"));
