import React, { useEffect } from 'react';

import "../styles/home.scss";

export default function Home() {

  let profilePictureData = {};
  useEffect(() => {
    profilePictureData = document.getElementsByClassName('profile-picture-slider')[0].getClientRects()[0];
    console.log(profilePictureData);
  }, []);

  let sliderEffectHandler = (e) => {
    console.log(profilePictureData.left);
    console.log(e.pageX);
    console.log(e.pageY);
    console.log("----------------------------");
  }

  return (
    <div className="home-container">
      <h1>Hi, Ni Hau, Hola, Bonjure, Salam, Marhaba, Guten Tag, Namaste, Konnichiwa </h1>
      {/* <img src="https://i.imgur.com/ID1ZAgw.jpg" alt="profile picture"/> */}
      {/* <img src={require('../images/profile-pic.jpg')} alt="profile picture"/> */}
      <div className="profile-picture-slider" onMouseEnter={sliderEffectHandler} >
        <img className="profile-picture" src={require('../images/profile-pic.jpg')} alt="profile picture" />
        <img className="profile-picture-avatar" src={require('../images/profile-pic-avatar.png')} alt="profile picture avatar"/>
      </div>
    </div>
  )
}
