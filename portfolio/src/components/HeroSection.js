// src/components/HeroSection.js
import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Hi, I'm <span className="highlight">Joseph</span></h1>
        <p className="hero-description">
          I’m a passionate full-stack software developer with a keen interest in building innovative solutions and a commitment to lifelong learning.
        </p>
      </div>
    </section>
  );
}

export default HeroSection;
