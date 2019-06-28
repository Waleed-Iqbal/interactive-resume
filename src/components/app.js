import React from "react";
import { Switch, Route } from "react-router-dom";
import "../styles/globals.scss";
import "../styles/under-construction.scss";
import { UnderConstruction } from "./under-construction";
import Resume from "./resume";
import { Error404 } from './error404';

class App extends React.Component {

  render() {
    return (
      <React.Fragment>
        {/* NavBar is not inside Switch since its gonna be displayed on all pages */}
        <Switch>
          <Route 
            exact 
            path="/" 
            render={
              props => (
                <Page {...props} component={UnderConstruction} title="Coming Soon" />
              )
            }
          />
          <Route
            exact
            path="/resume"
            render={
              props => (
                <Page {...props} component={Resume} title="Resume" />
              )
            }
          />
          <Route
            render={
              props => (
                <Page {...props} component={Error404} title="Page not found" />
              )
            }
          />
        </Switch>
      </React.Fragment>
    );
  }
}

// The following component is used to add custom title while routing
class Page extends React.Component {
  componentDidMount() {
    document.title = this.props.title
  }

  render() {
    const PageComponent = this.props.component

    return (
      <PageComponent />
    )
  }
}

export default App;
