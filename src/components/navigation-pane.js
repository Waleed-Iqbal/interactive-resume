import React, { Component } from 'react';
import "../styles/navigation-pane.scss";
import { Link } from 'react-router-dom';
import { AppNavigationLinks } from '../scripts/pages-data';

export default function NavigationPane() {
  return (
    <nav className="main-left-nav">
      <ul className="nav-tabs">
        <NavigationItem navigationClass="nav-home" linkTo={AppNavigationLinks.home} text="Home" />
        {/* <NavigationItem navigationClass="nav-about" linkTo="/aboutwaleed" text="About me" /> */}
        <NavigationItem navigationClass="nav-simplistic-resume" linkTo={AppNavigationLinks.simpleResume} text="Resume" />
        {/* <NavigationItem navigationClass="nav-interactive-resume" linkTo="/interactive-resume" text="Immersive Resume" /> */}
        {/* <NavigationItem navigationClass="nav-contact" linkTo="/contact-me" text="Contact Me" /> */}
        <li className="demos"><p>Demos</p></li>
        <NavigationItem navigationClass="demo nav-video-player" linkTo="/video-player" text="Video Player" />
        <NavigationItem navigationClass="demo nav-loading-animation" linkTo={AppNavigationLinks.loadingAnimations} text="Loaders" />
        <NavigationItem navigationClass="demo nav-email-signatures" linkTo={AppNavigationLinks.EmailSignatures} text="Email Signatures" />
        {/* <NavigationItem navigationClass="demo nav-morse-code" linkTo="/morse-code" text="Morse Code" /> */}
      </ul>
    </nav>
  )
}

class NavigationItem extends Component {
  render() {
    return (
      <li className={this.props.navigationClass}>
        <Link to={this.props.linkTo}>
          <p>{this.props.text}</p>
        </Link>
      </li>
    )
  }
}
