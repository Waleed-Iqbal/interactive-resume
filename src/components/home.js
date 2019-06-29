import React from 'react';
import {Link} from 'react-router-dom';
import "../styles/home.scss";

export default function Home() {
  return (
    <div class="home-container">
      <nav className="main-left-nav">
        <ul className="nav-tabs">
          <li className="nav-home">
            <Link to="/home" >
              Home
            </Link>
          </li>
          <li className="nav-simplistic-resume">
            Simplistic Resume
          </li>
          <li className="nav-interactive-resume">
            Immersive Resume
          </li>
          <li className="nav-demos-samples">
            Demos &amp; Samples
          </li>
          <li className="nav-blog">
            Blog
          </li>
          <li className="nav-contact">
            Get in touch
          </li>
        </ul>
      </nav>
      <main className="main-section"></main>
    </div>
  )
}
