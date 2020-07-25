import React from "react";
import "../styles/simple-resume.scss";
import { AvatarWaleedFace } from "./avatars/waleed/avatar-waleed-face";
import AnimatingText from "./animating-text";
import { SimpleResumePage as Data } from "../scripts/pages-data";

export function SimpleResume() {
  document.title = Data.pageTitle;

  return (
    <main className='resume-container'>
      <section className='name-designation'>
        <AvatarWaleedFace />
        <div className='name-designation-container'>
          <h1 className='name'>Waleed Iqbal</h1>
          <h1 className='designation'>Frontend Developer</h1>
        </div>
        <div className='transform-animation'>
          <p className='transform-text'>I transform &nbsp;</p>
          <p className='transform-animating-text'>
            <AnimatingText
              containerClassName='transform-qualities'
              textClassName='transform-quality'
              textList={["mockup", "complex", "lagging"]}
            />
            <span className='into'>into</span>
            <AnimatingText
              containerClassName='transform-qualities'
              textClassName='transform-quality'
              textList={["reality", "simple", "leading"]}
            />
          </p>
          <p> ... and much more</p>
        </div>
      </section>

      <section className='contact-info'>
        <h1 className='contact-me'>Want to reach me?</h1>
        <div className='contact-links'>
          <div className='contact-me'>
            <h3>Contact me</h3>
            <ul>
              <li className='email'>
                <a
                  className='icon icon-email'
                  href={`mailto:${Data.emailId}`}></a>
                Don't be shy. Drop me an email at
                <a
                  href={`mailto:${Data.emailId}`}
                  target='_blank'
                  rel='noopener noreferrer'>
                  {Data.emailId}
                </a>
              </li>
              <li className='linked-in'>
                <a
                  className='icon icon-linkedin'
                  href={Data.linkedInProfile}></a>
                Visit my
                <a
                  href={Data.linkedInProfile}
                  target='_blank'
                  rel='noopener noreferrer'>
                  LinkedIn profile
                </a>
              </li>
              <li className='skype-me'>
                <a
                  className='icon icon-skype'
                  title="clicking it won't work, search this id on skype"></a>
                Can be reach on Skype at
                <a title="clicking it won't work, search this id on skype">
                  khawajawaleediqbal91
                </a>
              </li>
            </ul>
          </div>
          <div className='hire-me'>
            <h3>Hire me</h3>
            <li className='fiverr'>
              <a
                className='icon icon-fiverr'
                href='https://www.fiverr.com/waleed_iqbal'></a>
              Have a peek at my
              <a
                href='https://www.fiverr.com/waleed_iqbal'
                target='_blank'
                rel='noopener noreferrer'>
                Fiverr 5 Star Rated Profile
              </a>
            </li>
          </div>
          <div className='social-presence'>
            <h3>Social and technical presence</h3>
            <ul>
              <li className='git-hub'>
                <a
                  href='https://github.com/Waleed-Iqbal'
                  target='_blank'
                  rel='noopener noreferrer'>
                  <img
                    src={require("../images/icons/icon-github.png")}
                    alt='GitHub icon'
                  />
                </a>
                Want a free project? checkout my
                <a
                  href='https://github.com/Waleed-Iqbal'
                  target='_blank'
                  rel='noopener noreferrer'>
                  Github
                </a>
                account.
              </li>
              <li className='stack-overflow'>
                <a
                  href='https://stackoverflow.com/users/4758651/waleed-iqbal'
                  target='_blank'
                  rel='noopener noreferrer'>
                  <img
                    src={require("../images/icons/icon-stackoverflow.png")}
                    alt='Stackoverflow icon'
                  />
                </a>
                Need to copy paste code? visit my
                <a
                  href='https://stackoverflow.com/users/4758651/waleed-iqbal'
                  target='_blank'
                  rel='noopener noreferrer'>
                  Stackoverflow
                </a>
                profile
              </li>
              <li className='freecodecamp'>
                <a
                  href='https://www.freecodecamp.org/waleed-iqbal'
                  target='_blank'
                  rel='noopener noreferrer'>
                  <img
                    src={require("../images/icons/icon-freecodecamp.svg")}
                    alt='FreeCodeCamp icon'
                    width='32px'
                    height='32px'
                  />
                </a>
                Enjoy learning from free sources? ME TOO, here is my
                <a
                  href='https://www.freecodecamp.org/waleed-iqbal'
                  target='_blank'
                  rel='noopener noreferrer'>
                  FreeCodeCamp
                </a>
                profile
              </li>
              <li className='facebook'>
                <a
                  href='https://web.facebook.com/KhawajaWaleedIqbal'
                  target='_blank'
                  rel='noopener noreferrer'>
                  <img
                    src={require("../images/icons/icon-fb.png")}
                    alt='Facebook icon'
                  />
                </a>
                Like to stalk? here is my
                <a
                  href='https://web.facebook.com/KhawajaWaleedIqbal'
                  target='_blank'
                  rel='noopener noreferrer'>
                  Facebook
                </a>
                profile
              </li>
              <li className='quora'>
                <a
                  href='https://www.quora.com/profile/Khawaja-Waleed-Iqbal'
                  target='_blank'
                  rel='noopener noreferrer'>
                  <img
                    src={require("../images/icons/icon-quora.png")}
                    alt='Quora icon'
                  />
                </a>
                Want to ask questions together? Let's go to
                <a
                  href='https://www.quora.com/profile/Khawaja-Waleed-Iqbal'
                  target='_blank'
                  rel='noopener noreferrer'>
                  Quora
                </a>
              </li>

              <li className='reddit'>
                <a
                  href='https://www.reddit.com/user/ikhawajawaleed'
                  target='_blank'
                  rel='noopener noreferrer'>
                  <img
                    src={require("../images/icons/icon-reddit.png")}
                    alt='Reddit icon'
                  />
                </a>
                Are you are reddit person? So am I
                <a
                  href='https://www.reddit.com/user/ikhawajawaleed'
                  target='_blank'
                  rel='noopener noreferrer'>
                  Reddit
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className='skill-set'>
        <ul className='core-languages'>
          <li>JavaScript</li>
          <li>React</li>
          <li>CSS/SASS</li>
          <li>HTML</li>
          <li>C#</li>
          <li>TypeScript</li>
        </ul>
        <ul className='other-languages'>
          <li>Python</li>
          <li>MatLab</li>
          <li>SQL</li>
          <li>C++</li>
        </ul>
        <ul className='tools'>
          <li>VS Code</li>
          <li>Git - TFS - SVN</li>
          <li>Photoshop</li>
        </ul>
      </section>

      <section className='work-experience'>
        <ul>
          <li>KeepTrucking Feb 2019 - present</li>
          <li>NowSoftware Inc. Sep 2018 - January 1019</li>
          <li>Bentley Systems Inc. April 2017 - August 2018</li>
          <li>Contour Software Inc. / Trapeze Dec 2015 - March 2017</li>
          <li>LMKR Sep 2014 - August 2015</li>
        </ul>
      </section>

      <section className='certs-honors'>
        <ul>
          <li>Microsoft Certified Professional. (Oct 2015)</li>
          <li>
            Gold Medal for best undergraduate final year project awarded by
            National University of Science and Technology. (Aug 2014)
          </li>
          <li>
            GPA (> 3.5) based scholarship in every semester from NUST during
            Bachelors in Engineering. (2010 – 2014)
          </li>
          <li>
            Merit certificate from Rector NUST for being among the high
            achievers of the institute. (Mar 2014)
          </li>
          <li>
            Gold Medal and Cash Prize from school in Matriculation exams. (2008)
          </li>
        </ul>
      </section>

      <section className='interests'>
        <ul>
          <li>Cycling</li>
          <li>Reading</li>
          <li>Playing and making games</li>
          <li>Animations, animations and animation</li>
        </ul>
      </section>
    </main>
  );
}

export default SimpleResume;
