// src/components/Header.js
import React from 'react';
import './Header.css'; // Import the CSS file
import githubIcon from '../assets/icons/github.png'; // Import your GitHub icon
import linkedinIcon from '../assets/icons/linkedin.png'; // Import your LinkedIn icon
import emailIcon from '../assets/icons/email.png'; // Import your email icon

const Header = () => {
  return (
    <header>
      <div className="logo">Joseph Miller</div>
      <nav className="navbar">
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
      <div className="social-icons">
        <a href="mailto:jojomill04@gmail.com" target="_blank" rel="noopener noreferrer">
          <img src={emailIcon} alt="Email" className="social-icon" />
        </a>
        <a href="https://github.com/JIM-04" target="_blank" rel="noopener noreferrer">
          <img src={githubIcon} alt="GitHub" className="social-icon" />
        </a>
        <a href="https://www.linkedin.com/in/Joseph-Miller04/" target="_blank" rel="noopener noreferrer">
          <img src={linkedinIcon} alt="LinkedIn" className="social-icon" />
        </a>
      </div>
    </header>
  );
}

export default Header;
