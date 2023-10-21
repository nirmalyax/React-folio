import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import './header.css';

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/nirmalya-mondal/" target="_blank" rel="noreferrer" ><BsLinkedin className="social-icon" /></a>
      <a href="https://github.com/nirmalyax" target="_blank" rel="noreferrer" ><FaGithub className="social-icon" /></a>
      <a href="https://leetcode.com/nirmalyax/" target="_blank" rel="noreferrer" ><SiLeetcode className="social-icon" /></a>
    </div>
  )
}

export default HeaderSocials;
