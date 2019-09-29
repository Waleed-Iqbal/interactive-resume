import React, { useEffect } from 'react';
import AnimatingText from './animating-text';
import "../styles/home.scss";

export default function Home() {

  let profilePictureData = {};
  let slider = null;
  let start = null;
  let lowerLimit = -184;
  let upperLimit = -8;
  let newPositionOfAvatar = 0;

  useEffect(() => {
    profilePictureData = document.getElementsByClassName('profile-picture-slider')[0].getClientRects()[0];
    slider = document.getElementsByClassName('slider-container')[0];

  }, []);

  function slideAvatar(timestamp) {
    if (!start) start = timestamp;
    var progress = timestamp - start;

    if (newPositionOfAvatar <= lowerLimit) newPositionOfAvatar = lowerLimit;
    if (newPositionOfAvatar >= upperLimit) newPositionOfAvatar = upperLimit;

    let newBackgroundPosition = newPositionOfAvatar - 180;
    newPositionOfAvatar += "px";

    newBackgroundPosition += "px";
    slider.style.left = newPositionOfAvatar;


    if (progress < 400) {
      window.requestAnimationFrame(slideAvatar);
    }
  }

  let sliderEffectHandler = (e) => {


    newPositionOfAvatar = e.pageX - profilePictureData.left - 184;

    if (newPositionOfAvatar <= lowerLimit) newPositionOfAvatar = lowerLimit;
    if (newPositionOfAvatar >= upperLimit) newPositionOfAvatar = upperLimit;

    window.requestAnimationFrame(slideAvatar);
  }

  return (
    <div className="home-container">
      <AnimatingText
        containerClassName="home-greetings"
        textClassName="home-greeting"
        textList={['Hi', 'Ni Hau', 'Hola', 'Bonjour', 'Salam', 'Marhaba', 'Guten Tag', 'Namaste', 'Konnichiwa']} />

      <div
        className="profile-picture-slider"
        onMouseEnter={sliderEffectHandler}
        onMouseMove={sliderEffectHandler}
        onMouseLeave={sliderEffectHandler}
      >
        <div className="profile-picture-container">
          <img
            className="profile-picture"
            src={require('../images/profile-pic.jpg')}
            alt="profile picture" />
        </div>
        <div className="slider-container">
          <div className="left-slider"></div>
          <div className="right-slider"></div>
        </div>
        {/* <div className="profile-picture-avatar-container">
          <img
            className="profile-picture-avatar"
            src={require('../images/profile-pic-avatar.jpg')}
            alt="profile picture avatar" />
        </div> */}
      </div>
    </div>
  )
}
