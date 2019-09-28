import React, { useEffect } from 'react';
import AnimatingText from './animating-text';
import "../styles/home.scss";

export default function Home() {

  let profilePictureData = {};
  let avatar = null;
  let start = null;
  let newPositionOfAvatar = 0;

  useEffect(() => {
    profilePictureData = document.getElementsByClassName('profile-picture-slider')[0].getClientRects()[0];
    avatar = document.getElementsByClassName('profile-picture-avatar')[0];
    console.log(profilePictureData);
  }, []);

  function slideAvatar(timestamp) {
    if (!start) start = timestamp;
    var progress = timestamp - start;
    avatar.style.left = newPositionOfAvatar;
    if (progress < 400) {
      window.requestAnimationFrame(slideAvatar);
    }
  }

  let sliderEffectHandler = (e) => {
    let lowerLimit = 0;
    let upperLimit = 180;
    console.log(`profilePictureData.left: ... ${profilePictureData.left}  ... e.pageX: ... ${e.pageX}`)
    newPositionOfAvatar = e.pageX - profilePictureData.left;

    if (newPositionOfAvatar <= lowerLimit) {
      newPositionOfAvatar = lowerLimit;
    }

    if (newPositionOfAvatar >= upperLimit) {
      newPositionOfAvatar = upperLimit;
    }

    newPositionOfAvatar += "px";
    console.log(newPositionOfAvatar);
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
        onMouseLeave={sliderEffectHandler}>
        {/* <img src="https://i.imgur.com/ID1ZAgw.jpg" alt="profile picture"/> */}
        {/* <img src={require('../images/profile-pic.jpg')} alt="profile picture"/> */}
        <img
          className="profile-picture"
          src={require('../images/profile-pic.jpg')}
          alt="profile picture" />
        <img
          className="profile-picture-avatar"
          src={require('../images/profile-pic-avatar.jpg')}
          alt="profile picture avatar" />
      </div>
    </div>
  )
}
