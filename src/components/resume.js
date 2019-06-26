import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "../styles/resume.scss";


export function Resume() {
  return (
    <main className="resume-container">
      <section className="name designation">
        <div className="first-name">Khawaja</div>
        <title>Frontend Developer, Web Animator, Brings your online presense to life</title>
        <div className="last-name">Waleed Iqbal</div>
      </section>
      <section className="somethings-about-me"></section>
      <section className="content">
        <div className="contact-info">
          <div className="contact-me">
            <ul>
              <li className="email">ikhawajawaleed@gmail.com Don't be shy. Drop me an email</li>
              <li className="linked-in">
                <a href="https://www.linkedin.com/in/kwaleediqbal" target="_black">
                  LinkedIn profile
                </a>
              </li>
            </ul>
          </div>
          <div className="hire-me">
            <p className="fiverr">
              <a href="https://www.fiverr.com/waleed_iqbal?up_rollout=true" target="_black">
                Fiverr 5 Star Rated Profile
              </a>
              <p>Have a peek</p>
            </p>
          </div>
          <div className="social-presence">
            <ul>
              <li className="git-hub">
                <a href="https://github.com/Waleed-Iqbal" target="_black">
                  Github
                </a>
                <p className="">Wanna copy paste code?</p>
              </li>
              <li className="stack-overflow">
                <a href="https://stackoverflow.com/users/4758651/waleed-iqbal" target="_black">
                  Stackoverflow
                </a>
                <p className="">Want some stylish answers?</p> 
              </li>
              <li className="facebook">
                <a href="https://web.facebook.com/KhawajaWaleedIqbal" target="_black">
                  Facebook
                </a>
                <p className=""> Wanna stalk?</p>
              </li>
              <li className="quora">
                <a href="https://www.quora.com/profile/Khawaja-Waleed-Iqbal" target="_black">
                  Quora
                </a>
                <p className="">Lets ask questions together</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="skill-set"></div>
        <div className="work-experience"></div>
        <div className="certifications"></div>
        <div className="education"></div>
        <div className="interests"></div>
      </section>
    </main>
  );
}

export default Resume;