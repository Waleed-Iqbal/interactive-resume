
import React from "react";
import { Switch, Route } from "react-router-dom";

import "../styles/globals.scss";
import UnderConstruction from "./under-construction";
import VideoPlayerApp from "./demos/video-player/containers/app";
import SimpleResume from "./simple-resume";
import Home from "./home";
import { Error404 } from './error404';
import NavigationPane from './navigation-pane';
import LoadingAnimation from './demos/loading-animations/loading-animations';
import { PageTitles, AppNavigationLinks } from '../scripts/pages-data';

export default function App() {
  return (
    <React.Fragment>
      <NavigationPane />
      {/* NavBar is not inside Switch since its gonna be displayed on all pages */}
      <main className="main-section">
        <Switch>
          <Route
            exact
            path={AppNavigationLinks.default}
            render={
              props => (
                <Page {...props} component={Home} title={PageTitles.homePage} />
              )
            }
          />
          <Route
            exact
            path={AppNavigationLinks.home}
            render={
              props => (
                <Page {...props} component={Home} title={PageTitles.homePage} />
              )
            }
          />
          {/* <Route
            exact
            path={AppNavigationLinks.aboutWaleed}
            render={
              props => (
                <Page {...props} component={UnderConstruction} title={PageTitles.aboutPage} heading={PageTitles.aboutPage} />
              )
            }
          /> */}
          <Route
            exact
            path={AppNavigationLinks.simpleResume}
            render={
              props => (
                <Page {...props} component={SimpleResume} title={PageTitles.simpleResume} />
              )
            }
          />
          {/* <Route
          exact
          path={AppNavigationLinks.interactiveResume}
          render={
            props => (
              <Page {...props} component={UnderConstruction} title="Interactive Resume" heading="Immersive resume" />
            )
          }
        /> */}
          <Route
            exact
            path={AppNavigationLinks.loadingAnimations}
            render={
              props => (
                <Page {...props} component={LoadingAnimation} title={PageTitles.loadingAnimations} heading={PageTitles.loadingAnimations} />
              )
            }
          />
          {/* <Route
            exact
            path={AppNavigationLinks.morseCode}
            render={
              props => (
                <Page {...props} component={UnderConstruction} title="Morse Code" heading="Morse Code" />
              )
            }
          /> */}
          {/* <Route
            exact
            path={AppNavigationLinks.emailSignatures}
            render={
              props => (
                <Page {...props} component={UnderConstruction} title="Email Signatures" heading="Email Signatures" />
              )
            }
          /> */}
          {/* <Route
            exact
            path={AppNavigationLinks.contactMe}
            render={
              props => (
                <Page {...props} component={UnderConstruction} title="Get in touch" heading="Contact info" />
              )
            }
          /> */}
          {/* START: Video player */}
          <Route
            exact
            path={AppNavigationLinks.videoPlayer}
            render={
              props => (
                <Page {...props} component={VideoPlayerApp} title={PageTitles.videoPlayer} heading={PageTitles.videoPlayer} />
              )
            }
          />
          <Route
            exact
            path="/video-player/:activeVideo"
            render={
              props => (
                <Page {...props} component={VideoPlayerApp} title={PageTitles.videoPlayer} heading={PageTitles.videoPlayer} />
              )
            }
          />
          {/* END: Video player */}
          <Route
            render={
              props => (
                <Page {...props} component={Error404} title={PageTitles.pageNotFound} />
              )
            }
          />
        </Switch>
      </main>
    </React.Fragment>
  );
}

/**
 * Add a component as page when routed with custom tab
 */
function Page(props) {

  document.title = props.title;
  const PageComponent = props.component;

  return (
      <PageComponent heading={props.heading} props={props} />
  )
}
