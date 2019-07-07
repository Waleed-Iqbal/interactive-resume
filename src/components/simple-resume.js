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
        <h1 className="contact-me">Contact me</h1>
        <div className="contact-links">
          <div className="contact-me">
            <ul>
              <li className="email">
                Don't be shy. Drop me an email at <a href="ikhawajawaleed@gmail.com"></a> 
              </li>
              <li className="linked-in">
                <a href="https://www.linkedin.com/in/kwaleediqbal" target="_black">
                  LinkedIn profile
                  </a>
              </li>
              <li className="skype-me">khawajawaleediqbal91</li>
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