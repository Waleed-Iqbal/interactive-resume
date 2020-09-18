import React from "react";
import "../styles/navigation-pane.scss";
import { Link } from "react-router-dom";
import { AppNavigationLinks } from "../scripts/pages-data";

export default function NavigationPane() {
  function hamburgerClicked(e) {
    document
      .querySelector(".nav-tabs-container")
      .classList.toggle("expand-menu");
    document.querySelector(".hamburger").classList.toggle("open");
  }

  return (
    <header className='header horz-padding'>
      <nav className='header-nav'>
        <div className='hamburger' onClick={hamburgerClicked}>
          {/* add class "W" to change the state */}
          <div className='line line-1'></div>
          <div className='line line-2'></div>
          <div className='line line-3'></div>
          <div className='line line-4'></div>
        </div>
        <div className='nav-tabs-container'>
          <ul className='nav-tabs'>
            <NavigationItem
              navigationClass='nav-home'
              linkTo={AppNavigationLinks.home}
              text='Home'
            />
            {/* <NavigationItem navigationClass="nav-about" linkTo="/aboutwaleed" text="About me" /> */}
            <NavigationItem
              navigationClass='nav-simplistic-resume'
              linkTo={AppNavigationLinks.simpleResume}
              text='Resume'
            />
            {/* <NavigationItem navigationClass="nav-interactive-resume" linkTo="/interactive-resume" text="Immersive Resume" /> */}
            {/* <NavigationItem navigationClass="nav-contact" linkTo="/contact-me" text="Contact Me" /> */}
            {/* <li className='demos'>
              <p>Demos</p>
            </li> */}
            <NavigationItem
              navigationClass='demo nav-demos'
              linkTo='/video-player'
              text='Demos'
            />
            <NavigationItem
              navigationClass='demo nav-video-player'
              linkTo='/video-player'
              text='Video Player'
            />
            <NavigationItem
              navigationClass='demo nav-loading-animation'
              linkTo={AppNavigationLinks.loadingAnimations}
              text='Loaders'
            />
            {/* <NavigationItem navigationClass="demo nav-email-signatures" linkTo={AppNavigationLinks.EmailSignatures} text="Email Signatures" /> */}
            {/* <NavigationItem navigationClass="demo nav-morse-code" linkTo="/morse-code" text="Morse Code" /> */}
          </ul>
        </div>
      </nav>
    </header>
  );
}

function NavigationItem(props) {
  return (
    <li className={props.navigationClass}>
      <Link to={props.linkTo}>
        <p>{props.text}</p>
      </Link>
    </li>
  );
}
