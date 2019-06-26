import React, { Component } from 'react';
import "../styles/resume.scss";


export function Resume() {
  return (
    <main className="resume-container">
      <section className="name designation"></section>
      <section className="somethings-about-me"></section>
      <section className="content">
        <div className="contact-info">
          <div className="contact-me"></div>
          <div className="hire-me"></div>
          <div className="social-presence"></div>
        </div>
        <div className="skill-set"></div>
        <div className="work-experience"></div>
        <div className="certifications"></div>
        <div className="education"></div>
        <div className="interests"></div>
      </section>
      This is my resume
    </main>
  );
}

export default Resume;