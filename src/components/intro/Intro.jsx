import "./intro.css";

import { FaAward } from "react-icons/fa";
import React from "react";
import { VscFolderLibrary } from "react-icons/vsc";
import img from '../../assets/logo.png'




const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={img} alt="Nirmalya Mondal"/>
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1.9+ year in Infosys <br />
              Test Engineer</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>10+ Completed Projects</small>
            </article>
          </div>
          <article className="about__card-para">
          <p className="summary">
          With over 1.9 years of experience in automation testing and frontend development, I have honed my skills in ensuring the quality and functionality of web applications. My expertise includes creating automated test scripts, conducting test cases, and performing regression testing to detect and resolve issues in software. Additionally, I have a strong background in frontend development, enabling me to collaborate effectively with development teams and understand the intricacies of the user interface, leading to more comprehensive and efficient testing processes. My experience in both fields positions me as a valuable asset in delivering high-quality, user-friendly, and bug-free web applications.
          </p>
          </article>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
