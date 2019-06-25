import React from "react";
import { Switch, Route } from "react-router-dom";
import "../styles/globals.scss";
import "../styles/under-construction.scss";
import { UnderConstruction } from "./under-construction";
import Resume from "./resume";

class Portfolio extends React.Component {
  //constructor(props) {
  //  super(props);
  //}

  render() {
    return (
      <React.Fragment>
        {/* NavBar is not inside Switch since its gonna be displayed on all pages */}
        <Switch>
          <Route exact path="/" component={UnderConstruction} />
          <Route exact path="/resume" component={Resume} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default Portfolio;
