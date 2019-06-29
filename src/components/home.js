import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/home.scss";

export default function Home() {
  return (
    <div class="home-container">
      <nav className="main-left-nav">
        <ul className="nav-tabs">
          <li className="nav-home">
            <Link to="/home" >
              <span>
                icon <p>Home</p>
              </span>
            </Link>
          </li>
          <li className="nav-simplistic-resume">
            <Link to="/simple-resume">
              <span>
                icon <p>Simplistic Resume</p>
              </span>
            </Link>
          </li>
          <li className="nav-interactive-resume">
            <Link to="/interactive-resume" >
              <span>
                icon <p>Immersive Resume</p>
              </span>
            </Link>
          </li>
          <li className="nav-demos-samples">
            <Link to="/demos" >
              <span>
                icon <p>Demos &amp; Samples</p>
              </span>
            </Link>
          </li>
          <li className="nav-blog">
            <Link to="/blog</li>">
              <span>
                icon <p>Blog</p>
              </span>
            </Link>
          </li>
          <li className="nav-contact">
            <Link to="contact-me">
              <span>
                icon <p>Get in touch</p>
              </span>
            </Link>
          </li>
        </ul>
      </nav>
      <main className="main-section"></main>
    </div>
  )
}
