import React, { useEffect } from "react";
import AnimatingText from "./animating-text";
import "../styles/home.scss";
import { HomePage } from "../scripts/pages-data";

export default function Home() {
  document.title = HomePage.pageTitle;

  let profilePictureData = {};
  let profilePictureAvatar = null;
  let start = null;
  let lowerLimit = -184;
  let upperLimit = -8;
  let upperWidthPercentage = 100;
  let newPositionOfAvatar = 50;

  useEffect(() => {
    profilePictureData = document
      .getElementsByClassName("profile-picture-slider")[0]
      .getClientRects()[0];
    profilePictureAvatar = document.getElementsByClassName(
      "profile-picture-avatar-container"
    )[0];
  }, []);

  function slideAvatar(timestamp) {
    if (!start) start = timestamp;
    var progress = timestamp - start;

    if (newPositionOfAvatar <= lowerLimit) newPositionOfAvatar = lowerLimit;
    if (newPositionOfAvatar >= upperLimit) newPositionOfAvatar = upperLimit;

    newPositionOfAvatar = (newPositionOfAvatar + 184) / 1.76;

    if (newPositionOfAvatar === upperWidthPercentage) return; // bad hack
    if (newPositionOfAvatar >= 98) newPositionOfAvatar = upperWidthPercentage; // bad hack

    newPositionOfAvatar = Math.round(newPositionOfAvatar);
    profilePictureAvatar.style.width = newPositionOfAvatar + "%";

    if (progress < 400) {
      window.requestAnimationFrame(slideAvatar);
    }
  }

  let sliderEffectHandler = e => {
    newPositionOfAvatar = e.pageX - profilePictureData.left - 184;

    if (newPositionOfAvatar <= lowerLimit) newPositionOfAvatar = lowerLimit;
    if (newPositionOfAvatar >= upperLimit) newPositionOfAvatar = upperLimit;

    window.requestAnimationFrame(slideAvatar);
  };

  return (
    <div className='home-container'>
      <AnimatingText
        containerClassName='home-greetings'
        textClassName='home-greeting'
        textList={HomePage.greetings}
      />

      <div
        className='profile-picture-slider'
        onMouseEnter={sliderEffectHandler}
        onMouseMove={sliderEffectHandler}
        onMouseLeave={sliderEffectHandler}>
        <div className='profile-picture-container'>
          <img
            className='profile-picture'
            src={require("../images/profile-pic.jpg")}
            alt='profile picture'
          />
        </div>
        <div className='profile-picture-avatar-container'>
          <img
            className='profile-picture-avatar'
            src={require("../images/profile-pic-avatar.jpg")}
            alt='profile picture'
          />
        </div>
      </div>
    </div>
  );
}
