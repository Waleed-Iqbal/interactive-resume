import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "../styles/resume.scss";


export function Resume() {
  return (
    <main className="resume-container">
      <section className="name designation">
        <div className="first-name">Khawaja</div>
        <title>Frontend Developer, Web Animator, Brings your online presence to life</title>
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
        <div className="work-experience">
          <li>KeepTrucking</li>
          <li>NowSoftware Inc.</li>
          <li>Bentley Systems Inc.</li>
          <li>Contour Software Inc. / Trapeze</li>
          <li>LMKR</li>
        </div>
        <div className="certs-honors">
          <ul>
            <li>Microsoft Certified Professional. (Oct 2015)</li>
            <li>Gold Medal for best undergraduate final year project awarded by National University of Science and Technology. (Aug 2014)</li>
            <li>GPA (> 3.5) based scholarship in every semester from NUST during Bachelors in Engineering. (2010 – 2014)</li>
            <li>Merit certificate from Rector NUST for being among the high achievers of the institute. (Mar 2014)</li>
            <li>Gold Medal and Cash Prize from school in Matriculation exams. (2008)</li>
          </ul>
        </div>
        <div className="education">
          <li>Undergraduate</li>
          <li>College</li>
          <li>School</li>
        </div>
        <div className="interests">
          <ul>
            <li>Cycling</li>
            <li>Reading</li>
            <li>Playing and making games</li>
          </ul>
        </div>
      </section>
    </main>
  );
}

export default Resume;