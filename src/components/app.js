
import React from "react";
import { Switch, Route } from "react-router-dom";
import UnderConstruction from "./under-construction";
import Demos from "../components/demos/demos";
import SimpleResume from "./simple-resume";
import Home from "./home";
import About from "./about";
import "../styles/globals.scss";
import "../styles/master.scss";
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
                <Page {...props} component={Home} title="Hire Waleed" />
              )
            }
          />
          <Route
            exact
            path="/home"
            render={
              props => (
                <Page {...props} component={Home} title="Hire Waleed" />
              )
            }
          />
          <Route
            exact
            path="/aboutwaleed"
            render={
              props => (
                <Page {...props} component={About} title="About Waleed" />
              )
            }
          />
          <Route
            exact
            path="/simple-resume"
            render={
              props => (
                <Page {...props} component={SimpleResume} title="Resume" />
              )
            }
          />
          {/* <Route
            exact
            path="/interactive-resume"
            render={
              props => (
                <Page {...props} component={UnderConstruction} title="Interactive Resume" heading="Immersive resume" />
              )
            }
          /> */}
          <Route
            exact
            path="/demos"
            render={
              props => (
                <Page {...props} component={UnderConstruction} title="Demos &amp; Samples" heading="Demos" />
              )
            }
          />
          <Route
            exact
            path="/blog"
            render={
              props => (
                <Page {...props} component={UnderConstruction} title="Waleed - Blog" heading="Blog" />
              )
            }
          />
          <Route
            exact
            path="/contact-me"
            render={
              props => (
                <Page {...props} component={UnderConstruction} title="Get in touch" heading="Contact info" />
              )
            }
          />
          <Route
            render={
              props => (
                <Page {...props} component={Error404} title="Page not found" heading="Blog" />
              )
            }
          />
        </Switch>
      </React.Fragment>
    );
  }
}

/**
 * Add a component as page when routed with custom tab
 */
class Page extends React.Component {

  componentDidMount() {
    document.title = this.props.title
  }

  render() {
    const PageComponent = this.props.component

    return (
      <PageComponent heading={this.props.heading} />
    )
  }
}

export default App;
