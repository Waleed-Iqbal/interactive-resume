import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, BrowserRouter } from "react-router-dom";
import App from "./components/app";

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById("root"));
