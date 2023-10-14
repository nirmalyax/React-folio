import "./portfolio.css";

import IMG1 from "../../assets/textanalyzer.jpeg";
import IMG2 from "../../assets/SigninSignup.gif";
import IMG3 from "../../assets/Tripboss.jpeg";
import IMG4 from "../../assets/p1.png";
import IMG5 from "../../assets/60060357-3D05-48DB-847B-EE3047F452F8_1_201_a.jpeg";
import IMG6 from "../../assets/clock.png";
import React from "react";
//import { useState } from "react";

//Portfolio function

const Projects = () => {
  const soloProjects = [
    {
      id: 1,
      title: "TextAnalyzer Website",
      img: IMG1,
      description:
        "TextAnalyzer is a free character counter tool that provides instant character & word count statistics for a given text.",
      technologies: "Html | CSS | React Js | Bootstrap | Vercel",
      link: "https://text-utils-react-three.vercel.app/",
      github: "https://github.com/nirmalyax/TextAnalyzer-react",
    },
    {
      id: 2,
      title: "Trip Boss",
      img: IMG3,
      description:
        "Travel Website to plan your vacation plans.",
      technologies: "HTML | CSS | JS | Bootstrap",
      link: "https://tripboss.vercel.app/",
      github: "https://github.com/nirmalyax/Tripboss",
    },
    {
      id: 3,
      title: "Sign-in/Sign-up Project",
      img: IMG2,
      description: "This site is a Sign-in/Sign-up page.",
      technologies: "HTML | CSS | Bootstrap",
      // link: "",
      github: "https://github.com/nirmalyax/Sign-in-Sign-up",
    },
    {
      id: 4,
      title: "Portfolio",
      img: IMG4,
      description:
        "A website to shocase the importance.",
      technologies: "Html | CSS | JavaScript",
      link: "https://nirmalyamondal.netlify.app/",
      github: "https://github.com/nirmalyax/Nirmalya_Portfolio",
    },
    {
      id: 5,
      title: "Portfolio Website with React",
      img: IMG5,
      description:
        "You want to know me more.. Visit Me.",
      technologies: "HTML | CSS | React.js | Figma",
      link: "https://nirmalyamondal.vercel.app/",
      github: "https://github.com/nirmalyax/React-folio",
    },
    {
      id: 6,
      title: "Analog Clock",
      img: IMG6,
      description:
        "An analog clock that showcases the real time.",
      technologies: "HTML | CSS | Javascript",  
      //link: "",
      github: "https://github.com/nirmalyax/Clock",
    },
  ];


  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className={`btn btn-primary`}
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
