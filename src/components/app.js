
import React from "react";
import { Switch, Route } from "react-router-dom";

import "../styles/globals.scss";
import UnderConstruction from "./under-construction";
import VideoPlayerApp from "./demos/video-player/containers/app";
import SimpleResume from "./simple-resume";
import Home from "./home";
import { Error404 } from './error404';
import NavigationPane from './navigation-pane';


class App extends React.Component {

  render() {
    return (
      <React.Fragment>
        <NavigationPane />
        {/* NavBar is not inside Switch since its gonna be displayed on all pages */}
        <main className="main-section">
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
                  <Page {...props} component={UnderConstruction} title="About Waleed" heading="About" />
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
            {/* START: Video player */}
            <Route
              exact
              path="/video-player"
              render={
                props => (
                  <Page {...props} component={VideoPlayerApp} title="Video Player" heading="Video Player" />
                )
              }
            />
            <Route
              exact
              path="/video-player/:activeVideo"
              render={
                props => (
                  <Page {...props} component={VideoPlayerApp} title="Video Player" heading="Video Player" />
                )
              }
            />
            {/* END: Video player */}
            <Route
              render={
                props => (
                  <Page {...props} component={Error404} title="Page not found" />
                )
              }
            />
          </Switch>
        </main>
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
    const PageComponent = this.props.component;

    return (
      <PageComponent heading={this.props.heading} props={this.props} />
    )
  }
}

export default App;
