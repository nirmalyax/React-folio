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
              <small>2+ years in Infosys <br />
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
          I am a seasoned IT professional with 2+ years at Infosys, excelling in automation, cloud computing, and incident management. Proficient in Git, Jenkins, and GitLab, I specialize in Docker, Kubernetes, and Terraform for efficient infrastructure management. With over 2 years of AWS experience, I am adept at EC2, S3, RDS, IAM, and Route53. Skilled in Linux, bash scripting, Java, and VB Script, I bring a robust understanding of Atlassian tools, especially Jira. My versatile skill set includes expertise in Windows, Linux, Mac, and various tools such as Prometheus, ELK, and Ansible, ensuring effective contributions to project success.
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
