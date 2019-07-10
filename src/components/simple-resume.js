import React, { Component } from 'react';
import "../styles/simple-resume.scss";
import { AvatarWaleedFace } from "./avatars/waleed/avatar-waleed-face";

export function SimpleResume() {
  return (
    <main className="resume-container">
      <section className="name-designation">
        <AvatarWaleedFace />
        <div className="name-designation-container">
          <h1 className="name">Waleed Iqbal</h1>
          <h1 className="designation">Frontend Developer</h1>
        </div>
        <div className="transform-animation">
          <p className="transform-text">I transform &nbsp;</p>
          <p className="transform-animating-text">
            <span className="transform-qualities">
              <div className="transform-quality"><b>mockup</b></div>
              <div className="transform-quality"><b>complex</b></div>
              <div className="transform-quality"><b>lagging</b></div>
            </span>
            <span className="into">into</span>
            <span className="transform-qualities">
              <div className="transform-quality"><b>layout</b></div>
              <div className="transform-quality"><b>simple</b></div>
              <div className="transform-quality"><b>leading</b></div>
            </span>  
          </p>
          <p> ... and much more</p>
        </div>
      </section>
             
      <section className="contact-info">
        <h1 className="contact-me">Want to reach me?</h1>
        <div className="contact-links">
          <div className="contact-me">
            <h3>Contact me</h3>
            <ul>
              <li className="email">
                <a className="icon icon-email" href="mailto:ikhawajawaleed@gmail.com"></a>Don't be shy. Drop me an email at <a href="mailto:ikhawajawaleed@gmail.com" target="_blank">ikhawajawaleed@gmail.com</a></li>
              <li className="linked-in">
              <a className="icon icon-linkedin" href="https://www.linkedin.com/in/kwaleediqbal"></a>Visit my <a href="https://www.linkedin.com/in/kwaleediqbal" target="_blank">LinkedIn profile</a>
              </li>
              <li className="skype-me"><a className="icon icon-skype" title="clicking it won't work, search this id on skype"></a>Can be reach on Skype at <a title="clicking it won't work, search this id on skype" >khawajawaleediqbal91</a></li>
            </ul>
          </div>
          <div className="hire-me">
            <h3>Hire me</h3>
            <li className="fiverr">
              Have a peek at my <a href="https://www.fiverr.com/waleed_iqbal?up_rollout=true" target="_blank">Fiverr 5 Star Rated Profile</a>
            </li>
          </div>
          <div className="social-presence">
            <h3>Social and technical presence</h3>
          <ul>
            <li className="git-hub">
              Want a free project? checkout my <a href="https://github.com/Waleed-Iqbal" target="_blank">Github</a> account.
            </li>
            <li className="stack-overflow">
              Need to copy paste code? visit my <a href="https://stackoverflow.com/users/4758651/waleed-iqbal" target="_blank">Stackoverflow</a> profile
            </li>
            <li className="facebook">
              Like to stalk? here is my <a href="https://web.facebook.com/KhawajaWaleedIqbal" target="_blank">Facebook</a> profile
            </li>
            <li className="quora">
              Want to ask questions together? Let's go to <a href="https://www.quora.com/profile/Khawaja-Waleed-Iqbal" target="_blank">Quora</a>
            </li>
          </ul>
        </div>
        </div>
      </section>
      {/*<section className="skill-set"></section>
      <section className="work-experience">
        <li>KeepTrucking</li>
        <li>NowSoftware Inc.</li>
        <li>Bentley Systems Inc.</li>
        <li>Contour Software Inc. / Trapeze</li>
        <li>LMKR</li>
      </section>
      <section className="certs-honors">
        <ul>
          <li>Microsoft Certified Professional. (Oct 2015)</li>
          <li>Gold Medal for best undergraduate final year project awarded by National University of Science and Technology. (Aug 2014)</li>
          <li>GPA (> 3.5) based scholarship in every semester from NUST during Bachelors in Engineering. (2010 – 2014)</li>
          <li>Merit certificate from Rector NUST for being among the high achievers of the institute. (Mar 2014)</li>
          <li>Gold Medal and Cash Prize from school in Matriculation exams. (2008)</li>
        </ul>
      </section>
      <section className="education">
        <li>Undergraduate</li>
        <li>College</li>
        <li>School</li>
      </section>
      <section className="interests"> 
        <ul>
          <li>Cycling</li>
          <li>Reading</li>
          <li>Playing and making games</li>
        </ul>
      </section>*/}
    </main>
  );
}

export default SimpleResume;