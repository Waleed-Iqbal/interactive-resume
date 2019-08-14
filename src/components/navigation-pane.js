import React, { Component } from 'react';
import "../styles/navigation-pane.scss";
import { Link } from 'react-router-dom';

export default function NavigationPane() {
  return (
    <nav className="main-left-nav">
      <ul className="nav-tabs">
        <NavigationItem navigationClass="nav-home" linkTo="/home" text="Home" />
        <NavigationItem navigationClass="nav-about" linkTo="/aboutwaleed" text="About me" />
        <NavigationItem navigationClass="nav-simplistic-resume" linkTo="/simple-resume" text="Resume" />
        {/* <NavigationItem navigationClass="nav-interactive-resume" linkTo="/interactive-resume" text="Immersive Resume" /> */}
        {/* <NavigationItem navigationClass="nav-demos-samples" linkTo="/demos" text="Demos" /> */}
        <NavigationItem navigationClass="nav-blog" linkTo="/blog" text="Blog" />
        <NavigationItem navigationClass="nav-contact" linkTo="/contact-me" text="Contact Me" />
        <li className="demos"><p>Demos</p></li>
        <NavigationItem navigationClass="nav-video-player" linkTo="/video-player" text="Video Player" />
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