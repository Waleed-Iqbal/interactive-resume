import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import "../styles/landing-page.scss";

export default function LandingPage() {
  return (
    
    <div class="home-container">
      <nav className="main-left-nav">
        <ul className="nav-tabs">
          <NavigationItem navigationClass="nav-home" linkTo="/home" text="Home" />
          <NavigationItem navigationClass="nav-about" linkTo="/aboutwaleed" text="Read my story" />
          <NavigationItem navigationClass="nav-simplistic-resume" linkTo="/simple-resume" text="Simplistic Resume" />
          <NavigationItem navigationClass="nav-interactive-resume" linkTo="/interactive-resume" text="Immersive Resume" />
          <NavigationItem navigationClass="nav-demos-samples" linkTo="/demos" text="Demos &amp; Samples" />
          <NavigationItem navigationClass="nav-blog" linkTo="/blog" text="Blog" />
          <NavigationItem navigationClass="nav-contact" linkTo="/contact-me" text="Get in touch" />
        </ul>
      </nav>
      <main className="main-section"></main>
    </div>
  )
}

class NavigationItem extends Component {
  render() {
    return (
      <div>
        <li className={this.props.navigationClass}>
            <Link to={this.props.linkTo}>
              <p>{this.props.text}</p>
            </Link>
          </li>
      </div>
    )
  }
}
