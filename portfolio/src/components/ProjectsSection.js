// src/components/ProjectsSection.js
import React, { useState } from 'react';
import './ProjectsSection.css';

const projects = [
  {
    id: 1,
    title: 'Project 1',
    description: 'Description of project 1.',
    image: 'path/to/project1-image.jpg'
  },
  {
    id: 2,
    title: 'Project 2',
    description: 'Description of project 2.',
    image: 'path/to/project2-image.jpg'
  },
  // Add more projects here
];

const ProjectsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section className="projects-section">
      <div className="carousel-container">
        <button className="carousel-button left" onClick={handlePrev}>←</button>
        <div className="carousel-wrapper">
          <div className="carousel-inner" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {projects.map((project) => (
              <div key={project.id} className="carousel-item">
                <img src={project.image} alt={project.title} className="carousel-image" />
                <div className="carousel-info">
                  <h2>{project.title}</h2>
                  <p>{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button className="carousel-button right" onClick={handleNext}>→</button>
      </div>
    </section>
  );
}

export default ProjectsSection;
