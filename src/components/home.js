import React, { useEffect } from 'react';

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
    newPositionOfAvatar = (e.pageX - profilePictureData.left) + "px";
    window.requestAnimationFrame(slideAvatar);
  }

  return (
    <div className="home-container">
      <h1>Hi, Ni Hau, Hola, Bonjure, Salam, Marhaba, Guten Tag, Namaste, Konnichiwa </h1>
      {/* <img src="https://i.imgur.com/ID1ZAgw.jpg" alt="profile picture"/> */}
      {/* <img src={require('../images/profile-pic.jpg')} alt="profile picture"/> */}
      <div className="profile-picture-slider" onMouseEnter={sliderEffectHandler} onMouseMove={sliderEffectHandler} onMouseLeave={sliderEffectHandler} >
        <img className="profile-picture" src={require('../images/profile-pic.jpg')} alt="profile picture" />
        <img className="profile-picture-avatar" src={require('../images/profile-pic-avatar.jpg')} alt="profile picture avatar" />
      </div>
    </div>
  )
}
