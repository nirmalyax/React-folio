import React from 'react';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import './header.css';

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1 >Nirmalya Mondal</h1>
        <h5 className="text-light">Cloud & Automation Engineer </h5>
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
