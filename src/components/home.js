import React from "react";
import AnimatingText from "./animating-text";
import "../styles/home.scss";
import { HomePage } from "../scripts/pages-data";
import ImageComparator from "../components/demos/image-comparator/image-comparator";

export default function Home() {
  document.title = HomePage.pageTitle;

  return (
    <div className='home-container horz-padding'>
      <section className='home-hero'>
        <AnimatingText
          containerClassName='home-greetings'
          textClassName='home-greeting'
          textList={HomePage.greetings}
        />
        <br />
        <h1 className='hero-heading'>{HomePage.heroHeading}</h1>
        {/* <p className='hero-description'>{HomePage.heroSubheading}</p> */}
      </section>
    </div>
  );
}
