import React from 'react';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import './header.css';

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5 className="header__text">Hello I'm</h5>
        <h1 className="header__title">Nirmalya Mondal</h1>
        <h5 className="header__text text-light">Front-end Developer & Test Engineer</h5>
        <CTA />
        <a href="#contact" className="scroll__down">
          Scroll Down &#10230;
        </a>
        <HeaderSocials />
      </div>
    </header>
  );
};

export default Header;
