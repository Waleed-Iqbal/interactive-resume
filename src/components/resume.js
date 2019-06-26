import React, { Component } from 'react';
import "../styles/resume.scss";


export function Resume() {
  return (
    <main className="resume-container">
      <section className="name designation">
        <div className="first-name">Khawaja</div>
        <title>Frontend Developer</title>
        <div className="last-name">Waleed Iqbal</div>
      </section>
      <section className="somethings-about-me"></section>
      <section className="content">
        <div className="contact-info">
          <div className="contact-me">
            <ul>
              <li className="email"></li>
              <li className="phone-number"></li>
              <li className="linked-in"></li>
            </ul>
          </div>
          <div className="hire-me">
            <p className="fiverr"></p>
          </div>
          <div className="social-presence">
            <ul>
              <li className="git-hub"></li>
              <li className="stack-overflow"></li>
              <li className="facebook"></li>
              <li className="quora"></li>
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